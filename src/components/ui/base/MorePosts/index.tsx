import React from "react";
import { StyledMorePosts } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SectionTitle from "../SectionTitle";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import ContentBlock from "../ContentBlock";
import PostThumbnail from "../ContentBlock/PostThumbnail";
import { getPostLink } from "../../../../utils/links";
import PostContent from "../ContentBlock/PostContent";
import PostCat from "../ContentBlock/PostContent/PostCat";
import Title from "../../../core/Title";
import { CategoryPreview } from "../../../../app-types/category";

export interface MorePostsProps {
  excludeSlug: string;
  categorySlugs: string[];
  limit: number;
}

interface MorePostsQueryResult {
  posts: {
    nodes: {
      title: string;
      slug: string;
      categories: {
        nodes: CategoryPreview[];
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
    }[];
  };
}

const MorePosts = (props: MorePostsProps) => {
  const { posts }: MorePostsQueryResult = useStaticQuery(graphql`
    {
      posts: allWpPost(sort: { order: DESC, fields: date }) {
        nodes {
          title
          slug
          categories {
            nodes {
              slug
              name
              uri
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 285, height: 190)
                }
              }
            }
          }
        }
      }
    }
  `);

  const selectedPosts = posts.nodes
    .filter((post) => {
      const postCategoriesSlugs = post.categories.nodes.map(
        (category) => category.slug
      );

      return props.categorySlugs
        .map((categorySlug) => postCategoriesSlugs.includes(categorySlug))
        .reduce((acc, curr) => acc || curr);
    })
    .filter((post) => post.slug !== props.excludeSlug)
    .slice(0, props.limit);

  return (
    <StyledMorePosts>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle level={2}>Post correlati</SectionTitle>
          </Col>
        </Row>
        <Row>
          {selectedPosts.map((post) => (
            <Col lg={3} md={6} sm={6} col={12} key={post.slug}>
              <ContentBlock marginTop={30}>
                <PostThumbnail
                  image={
                    post.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.title}
                  link={getPostLink(post.slug)}
                />
                <PostContent>
                  <PostCat categories={post.categories.nodes} />
                  <Title level={5}>
                    <Link to={getPostLink(post.slug)}>{post.title}</Link>
                  </Title>
                </PostContent>
              </ContentBlock>
            </Col>
          ))}
        </Row>
      </Container>
    </StyledMorePosts>
  );
};

export default MorePosts;
