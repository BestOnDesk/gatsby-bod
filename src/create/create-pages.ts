import { GatsbyNode } from "gatsby";
import { createPosts } from "./create-posts";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  await createPosts(actions, graphql);
};
