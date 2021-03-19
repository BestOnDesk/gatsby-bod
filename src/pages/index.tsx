import * as React from "react";
import { graphql } from "gatsby";
import GlobalWrapper from "../components/GlobalWrapper";

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
    <GlobalWrapper withLayout={true}>
      <h1>Test</h1>
    </GlobalWrapper>
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
