import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { AuthorPreview } from "./author";
import { CategoryPreview } from "./category";

export const PostPreviewFragment = graphql`
  fragment PostPreviewFragment on WpPost {
    date
    slug
    title
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 200, height: 130)
          }
        }
      }
    }
  }
`;

export interface PostPreview {
  date: string;
  slug: string;
  title: string;
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: IGatsbyImageData;
      };
    };
  };
}

export const PostExtendedPreviewFragment = graphql`
  fragment PostExtendedPreviewFragment on WpPost {
    date
    content
    title
    slug
    author {
      node {
        ...AuthorPreviewFragment
      }
    }
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 2880, height: 1440)
          }
        }
      }
    }
    categories {
      nodes {
        ...CategoryPreviewFragment
      }
    }
  }
`;

export interface PostExtendedPreview {
  date: string;
  content: string;
  title: string;
  slug: string;
  author: {
    node: AuthorPreview;
  };
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: IGatsbyImageData;
      };
    };
  };
  categories: {
    nodes: CategoryPreview[];
  };
}
