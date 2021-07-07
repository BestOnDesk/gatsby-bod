import React from "react";
import { PostExtendedPreview } from "../../../../app-types/post";
import { graphql, useStaticQuery } from "gatsby";
import FeaturedPost from "../../base/FeaturedPost";
import { humanizeTime } from "../../../../utils/reading-time";

export interface HomeFeaturedPostQueryProps {
  posts: {
    nodes: PostExtendedPreview[];
  };
}

const HomeFeaturedPost = () => {
  const { posts }: HomeFeaturedPostQueryProps = useStaticQuery(graphql`
    {
      posts: allWpPost(
        sort: { fields: date, order: DESC }
        filter: { isSticky: { eq: true } }
      ) {
        nodes {
          ...PostExtendedPreviewFeaturedPostFragment
        }
      }
    }
  `);

  return (
    <FeaturedPost
      left={{
        title: posts.nodes[0].title,
        slug: posts.nodes[0].slug,
        date: posts.nodes[0].date,
        image:
          posts.nodes[0].featuredImage.node.localFile.childImageSharp
            .gatsbyImageData,
        readingTime: humanizeTime(posts.nodes[0].seo.readingTime),
        author: {
          name: posts.nodes[0].author.node.name,
          slug: posts.nodes[0].author.node.slug,
        },
        categories: posts.nodes[0].categories.nodes,
      }}
      right={{
        title: posts.nodes[1].title,
        slug: posts.nodes[1].slug,
        date: posts.nodes[1].date,
        image:
          posts.nodes[1].featuredImage.node.localFile.childImageSharp
            .gatsbyImageData,
        readingTime: humanizeTime(posts.nodes[1].seo.readingTime),
        author: {
          name: posts.nodes[1].author.node.name,
          slug: posts.nodes[1].author.node.slug,
        },
        categories: posts.nodes[1].categories.nodes,
      }}
    />
  );
};

export default HomeFeaturedPost;
