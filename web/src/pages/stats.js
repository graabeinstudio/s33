import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Stats from "../components/stats";

export const query = graphql`
  query StatsPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    batches: allSanityBatch(
      sort: { fields: [number], order: DESC }
      filter: { slug: { current: { ne: null } }, brewedAt: { ne: null } }
    ) {
      edges {
        node {
          name
          brewedAt
          type {
            name
          }
          alcohol
          number
          ibu
        }
      }
    }
  }
`;

const StatsPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const batchNodes = (data || {}).batches ? mapEdgesToNodes(data.batches) : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 hidden>{site.title}</h1>
        {batchNodes && <Stats title="Statistikk" batches={batchNodes} />}
      </Container>
    </Layout>
  );
};

export default StatsPage;
