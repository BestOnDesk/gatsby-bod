import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/GlobalWrapper";

interface PostNode {
  node: {
    slug: string;
    title: string;
  };
}

interface IndexPageProps {
  data: {
    allWpPost: {
      edges: PostNode[];
    };
  };
}

export default ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <h1>Test</h1>
    </Layout>
  );
};

// {edges && edges.map(edge => {
//    return <h1>{edge.node.title}</h1>
// })}

export const indexPageQuery = graphql`
  query {
    allWpPost(limit: 10) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
