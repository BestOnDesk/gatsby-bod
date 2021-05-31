import { Actions, CreatePagesArgs } from "gatsby";
import { CategoryPreview } from "../app-types/category";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { POSTS_PER_PAGE } from "../constants/main";
import { getAuthorLink, getAuthorLinkWithPage } from "../utils/links";
import path from "path";

interface Post {
  slug: string;
  title: string;
  content: string;
  date: string;
  rawDate: string;
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
}

export interface CreateAuthorsQueryResult {
  users: {
    nodes: {
      name: string;
      slug: string;
      posts: {
        nodes: Post[];
      };
    }[];
  };
}

const getAuthorsCategoriesSlugs = (posts: Post[]): string[] => {
  const slugs: string[] = [];

  posts.forEach((post) => {
    post.categories.nodes.forEach((category) => {
      if (!slugs.includes(category.slug)) {
        slugs.push(category.slug);
      }
    });
  });

  return slugs;
};

export const createAuthors = async (
  actions: Actions,
  graphql: CreatePagesArgs["graphql"]
): Promise<void> => {
  const result = await graphql<CreateAuthorsQueryResult>(`
    {
      users: allWpUser {
        nodes {
          name
          slug
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
        }
      }
    }
  `);

  if (result.errors) {
    new Error("Error in authors query: " + result.errors);
  }

  result.data &&
    result.data.users.nodes.forEach((node) => {
      const numberOfPages = Math.ceil(node.posts.nodes.length / POSTS_PER_PAGE);

      Array.from({ length: numberOfPages }).forEach((_, i) => {
        const currentPath =
          i === 0
            ? getAuthorLink(node.slug)
            : `${getAuthorLinkWithPage(node.slug, i + 1)}`;
        let newerPath;
        let olderPath;

        if (i === 0) {
          newerPath = undefined;
        } else if (i === 1) {
          newerPath = getAuthorLink(node.slug);
        } else {
          newerPath = getAuthorLinkWithPage(node.slug, i);
        }

        if (i === numberOfPages - 1) {
          olderPath = undefined;
        } else {
          olderPath = getAuthorLinkWithPage(node.slug, i + 2);
        }

        actions.createPage({
          path: currentPath,
          component: path.resolve("./src/templates/author.tsx"),
          context: {
            pagination: {
              olderPath: olderPath,
              newerPath: newerPath,
              limit: POSTS_PER_PAGE,
              skip: i * POSTS_PER_PAGE,
              numberOfPages: numberOfPages,
              currentPage: i + 1,
            },
            author: node,
            authorCategoriesSlugs: getAuthorsCategoriesSlugs(node.posts.nodes),
            posts: node.posts.nodes.slice(
              i * POSTS_PER_PAGE,
              i * POSTS_PER_PAGE + POSTS_PER_PAGE
            ),
          },
        });
      });
    });
};
