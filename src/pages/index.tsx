import * as React from "react";
import { graphql } from "gatsby";
import GlobalWrapper from "components/core/GlobalWrapper";
import Last5PostsSlider from "components/ui/extended/Last5PostsSlider";
import FeaturedPost from "../components/ui/base/FeaturedPost";

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
      <Last5PostsSlider />
      <FeaturedPost />
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
