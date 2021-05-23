import { Actions, CreatePagesArgs } from "gatsby";
import { getCategoryLink, getCategoryLinkWithPage } from "../utils/links";
import * as path from "path";
import { AuthorPreview } from "../app-types/author";
import { POSTS_PER_PAGE } from "../constants/main";

export interface CreateCategoriesQueryResult {
  categories: {
    nodes: {
      slug: string;
      name: string;
      posts: {
        nodes: {
          slug: string;
          title: string;
          author: {
            node: AuthorPreview;
          };
        }[];
      };
      wpChildren: {
        nodes: {
          slug: string;
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
          posts {
            nodes {
              slug
              title
              content
              date(formatString: "DD MMM YYYY", locale: "it")
              author {
                node {
                  slug
                  name
                }
              }
              featuredImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 295, height: 250)
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

      const parentCategorySlug = result?.data?.categories.nodes.find(
        (category) => {
          return category.wpChildren.nodes.some(
            (subCategory) => subCategory.slug === node.slug
          );
        }
      )?.slug;

      Array.from({ length: numberOfPages }).forEach((_, i) => {
        const currentPath =
          i === 0
            ? getCategoryLink(node.slug)
            : `${getCategoryLinkWithPage(node.slug, i + 1)}`;
        let newerPath;
        let olderPath;

        if (i === 0) {
          newerPath = undefined;
        } else if (i === 1) {
          newerPath = getCategoryLink(node.slug);
        } else {
          newerPath = getCategoryLinkWithPage(node.slug, i);
        }

        if (i === numberOfPages - 1) {
          olderPath = undefined;
        } else {
          olderPath = getCategoryLinkWithPage(node.slug, i + 2);
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
            parentCategorySlug: parentCategorySlug,
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
