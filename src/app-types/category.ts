import { PostPreview } from "./post";
import { graphql } from "gatsby";

export const MenuCategoryFragment = graphql`
  fragment MenuCategoryFragment on WpCategory {
    slug
    name
    uri
    wpChildren {
      nodes {
        slug
        uri
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
  uri: string;
  wpChildren: {
    nodes: {
      slug: string;
      name: string;
      uri: string;
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
    uri
  }
`;

export interface CategoryPreview {
  name: string;
  slug: string;
  uri: string;
}
