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

export const CategoryPreviewFragment = graphql`
  fragment CategoryPreviewFragment on WpCategory {
    name
    slug
  }
`;

export interface CategoryPreview {
  name: string;
  slug: string;
}
