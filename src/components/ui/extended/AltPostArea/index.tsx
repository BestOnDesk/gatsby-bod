import React from "react";
import { AuthorPreview } from "../../../../app-types/author";
import { CategoryPreview } from "../../../../app-types/category";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { StyledAltPostArea } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SectionTitle from "../../base/SectionTitle";

export interface AltPostAreaQueryResult {
  posts: {
    nodes: {
      title: string;
      content: string;
      date: string;
      bigImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
      smallImage: {
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
      categories: {
        nodes: CategoryPreview[];
      };
    }[];
  };
}

const AltPostArea = () => {
  const { posts }: AltPostAreaQueryResult = useStaticQuery(graphql`
    {
      posts: allWpPost(
        filter: {
          categories: {
            nodes: {
              elemMatch: {
                wpParent: { node: { slug: { eq: "per-le-aziende" } } }
              }
            }
          }
        }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          title
          content
          date(formatString: "DD MMM YYYY", locale: "it")
          bigImage: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, height: 500)
                }
              }
            }
          }
          smallImage: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 285, height: 190)
                }
              }
            }
          }
          author {
            node {
              ...AuthorPreviewFragment
            }
          }
          categories {
            nodes {
              ...CategoryPreviewFragment
            }
          }
        }
      }
    }
  `);

  return (
    <StyledAltPostArea>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle level={2}>Per le aziende</SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6} md={12} xs={12}></Col>
          <Col xl={6} lg={6} md={12} xs={12}></Col>
        </Row>
      </Container>
    </StyledAltPostArea>
  );
};

export default AltPostArea;
