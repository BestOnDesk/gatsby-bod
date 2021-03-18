import React, { FunctionComponent, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeMode } from "../../styles/theme";
import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";

interface StaticImgProps {
  alt: string;
  src: string;
  srcDark?: string;
}

interface ImageQueryProps {
  images: {
    edges: {
      node: {
        relativePath: string;
        sourceInstanceName: string;
        childImageSharp: IGatsbyImageData;
      };
    }[];
  };
}

export type ImgProps = StaticImgProps & GatsbyImageProps;

const StaticImg: FunctionComponent<ImgProps> = ({
  src,
  alt,
  srcDark,
  ...rest
}) => (
  <StaticQuery
    query={imageQuery}
    render={(data: ImageQueryProps) => {
      const themeContext = useContext(ThemeContext);
      const computedSrc =
        themeContext.mode === ThemeMode.Light || srcDark === undefined
          ? src
          : srcDark;

      const image = data.images.edges.find(
        (n) => n.node.relativePath === computedSrc
      );

      if (image) {
        const imageData = getImage(image.node.childImageSharp);

        const { image: _, ...restProps } = rest;

        if (imageData) {
          return <GatsbyImage alt={alt} image={imageData} {...restProps} />;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }}
  />
);

const imageQuery = graphql`
  query imageQuery {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default StaticImg;
