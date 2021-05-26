import React from "react";
import {
  Content,
  Inner,
  Item,
  List,
  StyledWidgetCategories,
  Thumbnail,
} from "./index.style";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Title from "../../../core/Title";

export interface WidgetCategoriesProps {
  categorySlugs: string[];
  marginBottom?: number;
}

interface WidgetCategoriesQueryResult {
  categories: {
    nodes: {
      name: string;
      slug: string;
      uri: string;
      wpChildren: {
        nodes: {
          slug: string;
          name: string;
          uri: string;
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
    }[];
  };
}

const WidgetCategories = (props: WidgetCategoriesProps) => {
  const { categories }: WidgetCategoriesQueryResult = useStaticQuery(graphql`
    {
      categories: allWpCategory(
        sort: { fields: name, order: DESC }
        filter: {
          slug: { ne: "uncategorized-en" }
          wpChildren: { nodes: { elemMatch: { count: { gt: 0 } } } }
        }
      ) {
        nodes {
          name
          slug
          uri
          wpChildren {
            nodes {
              slug
              name
              uri
              posts {
                nodes {
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(width: 50, height: 50)
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

  const relatedMainCategories = categories.nodes.filter((mainCategory) => {
    const subCategoriesSlugs = mainCategory.wpChildren.nodes.map(
      (subCategory) => subCategory.slug
    );

    return props.categorySlugs
      .map((categorySlug) => subCategoriesSlugs.includes(categorySlug))
      .reduce((acc, curr) => acc || curr);
  });

  return (
    <StyledWidgetCategories marginBottom={props.marginBottom}>
      <List>
        {relatedMainCategories.map((mainCategory) => {
          return mainCategory.wpChildren.nodes.map((subCategory) => (
            <Item>
              <Inner to={subCategory.uri}>
                <Thumbnail>
                  <GatsbyImage
                    alt={subCategory.name}
                    image={
                      subCategory.posts.nodes[0].featuredImage.node.localFile
                        .childImageSharp.gatsbyImageData
                    }
                  />
                </Thumbnail>
                <Content>
                  <Title level={6}>{subCategory.name}</Title>
                </Content>
              </Inner>
            </Item>
          ));
        })}
      </List>
    </StyledWidgetCategories>
  );
};

export default WidgetCategories;
