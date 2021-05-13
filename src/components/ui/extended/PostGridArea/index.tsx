import React, { useState } from "react";
import { StyledPostGridArea } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SectionTitle from "../../base/SectionTitle";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TabButton from "../../base/Tab/TabButton";
import GridTabContent from "../../base/Tab/GridTabContent";
import { AuthorPreview } from "../../../../app-types/author";

export interface PostGridAreaProps {
  mainCategorySlug: string;
  backgroundGrey?: boolean;
}

interface PostGridQueryProps {
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
              content: string;
              author: {
                node: AuthorPreview;
              };
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
            }[];
          };
        }[];
      };
    }[];
  };
}

const PostGridArea = (props: PostGridAreaProps) => {
  const { categories }: PostGridQueryProps = useStaticQuery(graphql`
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
                  date(formatString: "DD MMM YYYY", locale: "it")
                  slug
                  title
                  content
                  author {
                    node {
                      ...AuthorPreviewFragment
                    }
                  }
                  bigImage: featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 1410, height: 1320)
                        }
                      }
                    }
                  }
                  smallImage: featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 990, height: 600)
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

  const category = categories.nodes.find(
    (category) => category.slug === props.mainCategorySlug
  );

  return (
    <StyledPostGridArea backgroundGrey={props.backgroundGrey}>
      {category && (
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle level={2}>{category?.name}</SectionTitle>
            </Col>
            <Col lg={12}>
              <TabButton
                elements={category?.wpChildren.nodes.map((node) => node.name)}
                selectedIndex={selected}
                onChange={(i: number) => setSelected(i)}
              />
              <GridTabContent
                categories={category?.wpChildren.nodes}
                selectedIndex={selected}
              />
            </Col>
          </Row>
        </Container>
      )}
    </StyledPostGridArea>
  );
};

export default PostGridArea;
