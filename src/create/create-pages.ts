import { GatsbyNode } from "gatsby";
import { createPosts } from "./create-posts";
import { createCategories } from "./create-categories";
import { createAuthors } from "./create-authors";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  await createPosts(actions, graphql);
  await createCategories(actions, graphql);
  await createAuthors(actions, graphql);
};
