import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { useState } from "react";
import { StyledTabArea, Wrapper } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SectionTitle from "../../base/SectionTitle";
import TabButton from "../../base/Tab/TabButton";
import TabContent from "../../base/Tab/TabContent";

export interface TabAreaProps {
  mainCategorySlug: string;
}

interface TabAreaQueryResult {
  categories: {
    nodes: {
      slug: string;
      name: string;
      wpChildren: {
        nodes: {
          slug: string;
          name: string;
          posts: {
            nodes: {
              date: string;
              slug: string;
              title: string;
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
    }[];
  };
}

const TabArea = (props: TabAreaProps) => {
  const { categories }: TabAreaQueryResult = useStaticQuery(graphql`
    query {
      categories: allWpCategory(
        sort: { fields: name, order: DESC }
        filter: {
          slug: { ne: "uncategorized-en" }
          wpChildren: { nodes: { elemMatch: { count: { gt: 0 } } } }
        }
      ) {
        nodes {
          slug
          name
          wpChildren {
            nodes {
              slug
              name
              posts {
                nodes {
                  date
                  slug
                  title
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 780, height: 520)
                        }
                      }
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

  const [selected, setSelected] = useState<number>(0);
  const maxSliderPosts = 10;

  const category = categories.nodes.find(
    (category) => category.slug === props.mainCategorySlug
  );

  return (
    <StyledTabArea>
      {category && (
        <Wrapper>
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitle level={2}>{category?.name}</SectionTitle>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <TabButton
                  elements={category.wpChildren.nodes.map((node) => node.name)}
                  selectedIndex={selected}
                  onChange={(i: number) => setSelected(i)}
                />
                <TabContent
                  categories={category.wpChildren.nodes}
                  maxSliderPosts={maxSliderPosts}
                  selectedIndex={selected}
                />
              </Col>
            </Row>
          </Container>
        </Wrapper>
      )}
    </StyledTabArea>
  );
};

export default TabArea;
