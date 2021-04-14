import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";

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
