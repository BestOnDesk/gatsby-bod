import { Actions, CreatePagesArgs } from "gatsby";
import { getCategoryLinkWithPage } from "../utils/links";
import * as path from "path";
import { POSTS_PER_PAGE } from "../constants/main";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { CategoryPreview } from "../app-types/category";

export interface CreateCategoriesQueryResult {
  categories: {
    nodes: {
      slug: string;
      name: string;
      uri: string;
      posts: {
        nodes: {
          slug: string;
          title: string;
          content: string;
          date: string;
          categories: {
            nodes: CategoryPreview[];
          };
          author: {
            node: {
              name: string;
              slug: string;
            };
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
      wpChildren: {
        nodes: {
          slug: string;
          name: string;
        }[];
      };
    }[];
  };
}

export const createCategories = async (
  actions: Actions,
  graphql: CreatePagesArgs["graphql"]
): Promise<void> => {
  const result = await graphql<CreateCategoriesQueryResult>(`
    {
      categories: allWpCategory(filter: { slug: { ne: "uncategorized-en" } }) {
        nodes {
          slug
          name
          uri
          posts {
            nodes {
              slug
              title
              content
              date(formatString: "DD MMM YYYY", locale: "it")
              categories {
                nodes {
                  name
                  slug
                  uri
                }
              }
              author {
                node {
                  slug
                  name
                }
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 549, height: 259)
                    }
                  }
                }
              }
            }
          }
          wpChildren {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    new Error("Error in categories query: " + result.errors);
  }

  result.data &&
    result.data.categories.nodes.forEach((node) => {
      const numberOfPages = Math.ceil(node.posts.nodes.length / POSTS_PER_PAGE);

      const parentCategoryObj = result?.data?.categories.nodes.find(
        (category) => {
          return category.wpChildren.nodes.some(
            (subCategory) => subCategory.slug === node.slug
          );
        }
      );

      const parentCategory = parentCategoryObj
        ? {
            slug: parentCategoryObj?.slug,
            name: parentCategoryObj?.name,
            uri: parentCategoryObj?.uri,
          }
        : undefined;

      Array.from({ length: numberOfPages }).forEach((_, i) => {
        const currentPath =
          i === 0 ? node.uri : `${getCategoryLinkWithPage(node.uri, i + 1)}`;
        let newerPath;
        let olderPath;

        if (i === 0) {
          newerPath = undefined;
        } else if (i === 1) {
          newerPath = node.uri;
        } else {
          newerPath = getCategoryLinkWithPage(node.uri, i);
        }

        if (i === numberOfPages - 1) {
          olderPath = undefined;
        } else {
          olderPath = getCategoryLinkWithPage(node.uri, i + 2);
        }

        actions.createPage({
          path: currentPath,
          component: path.resolve("./src/templates/category.tsx"),
          context: {
            pagination: {
              olderPath: olderPath,
              newerPath: newerPath,
              limit: POSTS_PER_PAGE,
              skip: i * POSTS_PER_PAGE,
              numberOfPages: numberOfPages,
              currentPage: i + 1,
            },
            parentCategory,
            category: node,
            posts: node.posts.nodes.slice(
              i * POSTS_PER_PAGE,
              i * POSTS_PER_PAGE + POSTS_PER_PAGE
            ),
          },
        });
      });
    });
};
