import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PostsSlider, { PostSliderPost } from "../../base/PostsSlider";
import { getReadingTimeString } from "../../../../utils/reading-time";
import { PostExtendedPreview } from "../../../../app-types/post";

export interface Last5PostsSliderQueryProps {
  posts: {
    nodes: PostExtendedPreview[];
  };
}

const Last5PostsSlider = () => {
  const { posts }: Last5PostsSliderQueryProps = useStaticQuery(graphql`
    {
      posts: allWpPost(sort: { fields: date, order: DESC }, limit: 5) {
        nodes {
          ...PostExtendedPreviewFragment
        }
      }
    }
  `);

  const sliderPosts = posts.nodes.map((queryPost) => {
    return {
      title: queryPost.title,
      slug: queryPost.slug,
      image: queryPost.featuredImage.node.localFile.childImageSharp,
      readingTime: getReadingTimeString(queryPost.content),
      author: {
        name: queryPost.author.node.name,
        slug: queryPost.author.node.slug,
      },
      categories: queryPost.categories.nodes,
    } as PostSliderPost;
  });

  return <PostsSlider posts={sliderPosts} />;
};

export default Last5PostsSlider;
