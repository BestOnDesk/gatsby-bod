import React from "react";
import {
  PostMediumBlock,
  StyledWidgetPostList,
  WidgetTitle,
} from "./index.style";
import ContentBlock from "../ContentBlock";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import PostThumbnail from "../ContentBlock/PostThumbnail";
import { getPostLink } from "../../../../utils/links";
import PostContent from "../ContentBlock/PostContent";
import Title from "../../../core/Title";
import PostMeta from "../PostMeta";
import { getReadingTimeString } from "../../../../utils/reading-time";

export interface WidgetPostListProps {
  marginBottom?: number;
  limit: number;
}

interface WidgetPostListQueryResult {
  posts: {
    nodes: {
      title: string;
      date: string;
      content: string;
      slug: string;
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    }[];
  };
}

const WidgetPostList = (props: WidgetPostListProps) => {
  const { posts }: WidgetPostListQueryResult = useStaticQuery(graphql`
    {
      posts: allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          title
          date(formatString: "DD MMM YYYY", locale: "it")
          content
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 100, height: 100)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <StyledWidgetPostList marginBottom={props.marginBottom}>
      <WidgetTitle>Popolari su BestOnDesk</WidgetTitle>
      <PostMediumBlock>
        {posts.nodes.slice(0, props.limit).map((post) => (
          <ContentBlock postMedium marginBottom={20}>
            <PostThumbnail
              image={
                post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt={post.title}
              link={getPostLink(post.slug)}
            />
            <PostContent>
              <Title level={6}>
                <Link to={getPostLink(post.slug)}>{post.title}</Link>
              </Title>
              <PostMeta
                date={post.date}
                readingTime={getReadingTimeString(post.content)}
                postSlug={post.slug}
              />
            </PostContent>
          </ContentBlock>
        ))}
      </PostMediumBlock>
    </StyledWidgetPostList>
  );
};

export default WidgetPostList;
