import { Actions, CreatePagesArgs } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { CategoryPreview } from "../app-types/category";
import { POSTS_PER_PAGE } from "../constants/main";
import { getCategoryLinkWithPage } from "../utils/links";
import path from "path";

interface Post {
  slug: string;
  title: string;
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
  seo: {
    readingTime: number;
  };
}

interface Category {
  slug: string;
  name: string;
  uri: string;
  posts: {
    nodes: Post[];
  };
}

interface MainCategory extends Category {
  wpChildren: {
    nodes: Category[];
  };
}

export interface CreateCategoriesQueryResult {
  categories: {
    nodes: MainCategory[];
  };
}

const createCategoryPages = (
  category: Category | MainCategory,
  posts: Post[],
  actions: Actions,
  parentCategory?: Category
) => {
  const numberOfPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  Array.from({ length: numberOfPages }).forEach((_, i) => {
    const currentPath =
      i === 0
        ? category.uri
        : `${getCategoryLinkWithPage(category.uri, i + 1)}`;
    let newerPath;
    let olderPath;

    if (i === 0) {
      newerPath = undefined;
    } else if (i === 1) {
      newerPath = category.uri;
    } else {
      newerPath = getCategoryLinkWithPage(category.uri, i);
    }

    if (i === numberOfPages - 1) {
      olderPath = undefined;
    } else {
      olderPath = getCategoryLinkWithPage(category.uri, i + 2);
    }

    const parentCategoryObj = parentCategory
      ? {
          slug: parentCategory?.slug,
          name: parentCategory?.name,
          uri: parentCategory?.uri,
        }
      : undefined;

    //@ts-ignore
    delete category.posts;

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
        category: category,
        posts: posts.slice(
          i * POSTS_PER_PAGE,
          i * POSTS_PER_PAGE + POSTS_PER_PAGE
        ),
      },
    });
  });
};

export const createCategories = async (
  actions: Actions,
  graphql: CreatePagesArgs["graphql"]
): Promise<void> => {
  const result = await graphql<CreateCategoriesQueryResult>(`
    {
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
          uri
          posts {
            nodes {
              slug
              title
              date(formatString: "DD MMM YYYY", locale: "it")
              rawDate: date
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
              seo {
                readingTime
              }
            }
          }
          wpChildren {
            nodes {
              slug
              name
              uri
              posts {
                nodes {
                  slug
                  title
                  date(formatString: "DD MMM YYYY", locale: "it")
                  rawDate: date
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
                  seo {
                    readingTime
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
    new Error("Error in categories query: " + result.errors);
  }

  result.data &&
    result.data.categories.nodes.forEach((node) => {
      const posts = [...node.posts.nodes];

      node.wpChildren.nodes.forEach((subCategory) => {
        subCategory.posts.nodes.forEach((post) => {
          if (!posts.some((checkPost) => checkPost.slug === post.slug)) {
            posts.push(post);
          }
        });

        createCategoryPages(
          subCategory,
          subCategory.posts.nodes,
          actions,
          node
        );
      });

      const sortedPosts = posts.sort(
        (a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()
      );

      createCategoryPages(node, sortedPosts, actions);
    });
};
