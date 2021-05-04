import React from "react";
import { PostExtendedPreview } from "../../../../app-types/post";
import { graphql, useStaticQuery } from "gatsby";
import FeaturedPost from "../../base/FeaturedPost";
import { getReadingTimeString } from "../../../../utils/reading-time";

export interface HomeFeaturedPostQueryProps {
  posts: {
    nodes: PostExtendedPreview[];
  };
}

export interface HomeFeaturedPostProps {
  slugLeft: string;
  slugRight: string;
}

const HomeFeaturedPost = (props: HomeFeaturedPostProps) => {
  const { posts }: HomeFeaturedPostQueryProps = useStaticQuery(graphql`
    {
      posts: allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          ...PostExtendedPreviewFragment
        }
      }
    }
  `);

  const leftPost = posts.nodes.find((node) => node.slug === props.slugLeft);
  const rightPost = posts.nodes.find((node) => node.slug === props.slugRight);

  return (
    <>
      {leftPost && rightPost && (
        <FeaturedPost
          left={{
            title: leftPost.title,
            slug: leftPost.slug,
            date: leftPost.date,
            image: leftPost.featuredImage.node.localFile.childImageSharp,
            readingTime: getReadingTimeString(leftPost.content),
            author: {
              name: leftPost.author.node.name,
              slug: leftPost.author.node.slug,
            },
            categories: leftPost.categories.nodes,
          }}
          right={{
            title: rightPost.title,
            slug: rightPost.slug,
            date: rightPost.date,
            image: rightPost.featuredImage.node.localFile.childImageSharp,
            readingTime: getReadingTimeString(rightPost.content),
            author: {
              name: rightPost.author.node.name,
              slug: rightPost.author.node.slug,
            },
            categories: rightPost.categories.nodes,
          }}
        />
      )}
    </>
  );
};

export default HomeFeaturedPost;
