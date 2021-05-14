import { Actions, CreatePagesArgs } from "gatsby";
import { getPostLink } from "../utils/links";
import * as path from "path";

export interface CreatePostsQueryResult {
  posts: {
    nodes: {
      slug: string;
    }[];
  };
}

export const createPosts = async (
  actions: Actions,
  graphql: CreatePagesArgs["graphql"]
): Promise<void> => {
  const result = await graphql<CreatePostsQueryResult>(`
    query {
      posts: allWpPost {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    new Error("Error in posts query: " + result.errors);
  }

  result.data &&
    result.data.posts.nodes.forEach((node) => {
      actions.createPage({
        path: getPostLink(node.slug),
        component: path.resolve("./src/templates/post.tsx"),
        context: {
          slug: node.slug,
        },
      });
    });
};
