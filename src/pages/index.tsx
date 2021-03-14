import * as React from "react";
import Menu from "../components/Menu";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Layout from "../components/Layout";

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
      <Header />
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
