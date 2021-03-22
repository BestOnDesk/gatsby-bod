import { PostPreview } from "./post";

export interface MenuCategory {
  slug: string;
  name: string;
  wpChildren: {
    nodes: {
      slug: string;
      name: string;
      posts: {
        nodes: PostPreview[];
      };
    }[];
  };
}
