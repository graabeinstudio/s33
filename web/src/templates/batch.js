import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Project from "../components/project";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query BatchTemplateQuery($id: String!) {
    batch: sanityBatch(id: { eq: $id }) {
      id
      brewedAt
      typeOfBeer {
        _id
        name
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      name
      slug {
        current
      }
      _rawBody
    }
  }
`;

const BatchTemplate = props => {
  const { data, errors } = props;
  const batch = data && data.batch;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {batch && <SEO title={batch.name || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {batch && <Project {...batch} />}
    </Layout>
  );
};

export default BatchTemplate;
