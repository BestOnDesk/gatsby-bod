import { PostPreview } from "./post";
import { graphql } from "gatsby";

export const MenuCategoryFragment = graphql`
  fragment MenuCategoryFragment on WpCategory {
    slug
    name
    wpChildren {
      nodes {
        slug
        name
        posts {
          nodes {
            ...PostPreviewFragment
          }
        }
      }
    }
  }
`;

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
