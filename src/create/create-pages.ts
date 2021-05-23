import { GatsbyNode } from "gatsby";
import { createPosts } from "./create-posts";
import { createCategories } from "./create-categories";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  await createPosts(actions, graphql);
  await createCategories(actions, graphql);
};
