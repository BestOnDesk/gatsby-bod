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
  seo: {
    readingTime: number;
  };
}

export const PostExtendedPreviewPostSliderFragment = graphql`
  fragment PostExtendedPreviewPostSliderFragment on WpPost {
    date(formatString: "DD MMM YYYY", locale: "it")
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
    seo {
      readingTime
    }
    categories {
      nodes {
        ...CategoryPreviewFragment
      }
    }
  }
`;

export const PostExtendedPreviewFeaturedPostFragment = graphql`
  fragment PostExtendedPreviewFeaturedPostFragment on WpPost {
    date(formatString: "DD MMM YYYY", locale: "it")
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
            gatsbyImageData(width: 250, height: 250)
          }
        }
      }
    }
    seo {
      readingTime
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
  title: string;
  slug: string;
  author: {
    node: AuthorPreview;
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
  categories: {
    nodes: CategoryPreview[];
  };
}
