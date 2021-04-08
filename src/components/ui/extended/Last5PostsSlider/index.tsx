import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import PostsSlider, { PostSliderPost } from "../../base/PostsSlider";
import { getReadingTimeString } from "../../../../utils/reading-time";

export interface Last5PostsSliderQueryProps {
  posts: {
    nodes: {
      date: string;
      content: string;
      title: string;
      slug: string;
      author: {
        node: {
          name: string;
          slug: string;
        };
      };
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: IGatsbyImageData;
          };
        };
      };
      categories: {
        nodes: {
          name: string;
          slug: string;
        }[];
      };
    }[];
  };
}

const Last5PostsSlider = () => {
  const { posts }: Last5PostsSliderQueryProps = useStaticQuery(graphql`
    {
      posts: allWpPost(sort: { fields: date, order: DESC }, limit: 5) {
        nodes {
          date
          content
          title
          slug
          author {
            node {
              name
              slug
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2880, height: 1440)
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
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
