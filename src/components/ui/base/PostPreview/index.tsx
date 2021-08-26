import React, { useRef } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { AuthorPreview } from "../../../../app-types/author";
import {
  BackgroundImage,
  PreviewContent,
  StyledPostPreview,
} from "./index.style";
import Title from "../../../core/Title";
import PostMeta from "../PostMeta";
import { humanizeTime } from "../../../../utils/reading-time";
import { getPostLink } from "../../../../utils/links";

export interface PostPreviewQueryResult {
  posts: {
    nodes: {
      slug: string;
      title: string;
      date: string;
      seo: {
        metaDesc: string;
        readingTime: number;
      };
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
      author: {
        node: AuthorPreview;
      };
    }[];
  };
}

export const isPostPreview = (props: any): boolean => {
  return (
    (props.className?.includes("wp-block-embed-wordpress") ||
      props.className?.includes("wp-block-embed-bestondesk")) &&
    (props.children[0]?.props?.children[1]?.props?.children[0]?.props?.href ||
      (typeof props.children[0]?.props?.children[0] === "string" &&
        props.children[0]?.props?.children.length === 1))
  );
};

const PostPreview = (props: any) => {
  const { posts }: PostPreviewQueryResult = useStaticQuery(graphql`
    {
      posts: allWpPost {
        nodes {
          slug
          title
          date(formatString: "DD MMM YYYY", locale: "it")
          seo {
            metaDesc
            readingTime
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          author {
            node {
              ...AuthorPreviewFragment
            }
          }
        }
      }
    }
  `);

  const randomIndex = useRef<number>(
    Math.floor(Math.random() * posts.nodes.length)
  );

  const slug =
    typeof props.children[0]?.props?.children[0] === "string" &&
    props.children[0]?.props?.children.length === 1
      ? props.children[0]?.props?.children[0]
          .replace(/\\n/g, "")
          .replace(/\//g, "")
      : props.children[0]?.props?.children[1]?.props?.children[0]?.props?.href.replace(
          /\//g,
          ""
        );

  let post = posts.nodes.find((node) => node.slug === slug);

  post = post ? post : posts.nodes[randomIndex.current];

  return (
    <>
      {post && (
        <Link to={getPostLink(post.slug)}>
          <StyledPostPreview>
            <BackgroundImage
              backgroundSrc={
                post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData.images.fallback?.src
              }
            />
            <PreviewContent>
              <Title level={2}>{post.title}</Title>
              <p>{post.seo.metaDesc}</p>
              <PostMeta
                date={post.date}
                author={post.author.node}
                readingTime={humanizeTime(post.seo.readingTime)}
                postSlug={post.slug}
                withShareButtons
              />
            </PreviewContent>
          </StyledPostPreview>
        </Link>
      )}
    </>
  );
};

export default PostPreview;
