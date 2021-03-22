import { IGatsbyImageData } from "gatsby-plugin-image";

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
