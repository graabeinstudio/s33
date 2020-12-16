const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBatchPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBatch(filter: { slug: { current: { ne: null } }, brewedAt: { ne: null } }) {
        edges {
          node {
            id
            brewedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanityBatch || {}).edges || [];

  projectEdges
    .filter(edge => !isFuture(edge.node.brewedAt))
    .forEach(edge => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/batch/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/batch.js"),
        context: { id }
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBatchPages(graphql, actions);
};
