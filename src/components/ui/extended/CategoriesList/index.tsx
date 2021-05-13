import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Content,
  Inner,
  ListCategories,
  SingleCat,
  StyledCategoriesList,
  Thumbnail,
  TitleRow,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SectionTitle from "../../base/SectionTitle";
import { getCategoryLink } from "../../../../utils/links";
import Title from "../../../core/Title";

export interface CategoriesListQueryResult {
  categories: {
    nodes: {
      slug: string;
      name: string;
      posts: {
        nodes: {
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
    }[];
  };
}

export interface CategoriesListProps {
  slugs: string[];
  backgroundGrey?: boolean;
}

const CategoriesList = (props: CategoriesListProps) => {
  const { categories }: CategoriesListQueryResult = useStaticQuery(graphql`
    {
      categories: allWpCategory(
        sort: { fields: posts___nodes___date, order: DESC }
        filter: { slug: { ne: "uncategorized-en" }, parentId: { ne: null } }
      ) {
        nodes {
          slug
          name
          posts {
            nodes {
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 540, height: 540)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const getCategory = (slug: string) => {
    return categories.nodes.find((category) => category.slug === slug);
  };

  const getCategoryImage = (slug: string): IGatsbyImageData | undefined => {
    return getCategory(slug)?.posts.nodes[0].featuredImage.node.localFile
      .childImageSharp.gatsbyImageData;
  };

  return (
    <StyledCategoriesList backgroundGrey={props.backgroundGrey}>
      <Container>
        <TitleRow alignItems={"center"}>
          <Col>
            <SectionTitle level={2}>Topic popolari</SectionTitle>
          </Col>
        </TitleRow>
        <Row>
          <Col lg={12}>
            <ListCategories>
              {props.slugs.map((slug: string) => {
                const image = getCategoryImage(slug);
                const category = getCategory(slug);
                if (category && image) {
                  return (
                    <SingleCat>
                      <Inner>
                        <Link to={getCategoryLink(slug)}>
                          <Thumbnail>
                            <GatsbyImage alt={category.name} image={image} />
                          </Thumbnail>
                          <Content>
                            <Title level={5}>{category.name}</Title>
                          </Content>
                        </Link>
                      </Inner>
                    </SingleCat>
                  );
                }
              })}
            </ListCategories>
          </Col>
        </Row>
      </Container>
    </StyledCategoriesList>
  );
};

export default CategoriesList;
