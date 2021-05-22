import React from "react";
import { StyledMorePosts } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SectionTitle from "../SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface MorePostsProps {
  excludeSlug: string;
  categorySlugs: string[];
}

interface MorePostsQueryResult {
  posts: {
    nodes: {
      title: string;
      slug: string;
      categories: {
        nodes: {
          slug: string;
          name: string;
        }[];
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
            }
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
    .filter((post) => post.slug !== props.excludeSlug);

  return (
    <StyledMorePosts>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle level={2}>Altri post</SectionTitle>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </StyledMorePosts>
  );
};

export default MorePosts;
