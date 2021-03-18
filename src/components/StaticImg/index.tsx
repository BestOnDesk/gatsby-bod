import React, { FunctionComponent, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeMode } from "styles/theme";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImageProps } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";

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
    query={staticImgQuery}
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

        const { image: _, ...restDestr } = rest;

        if (imageData) {
          return <GatsbyImage alt={alt} image={imageData} {...restDestr} />;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }}
  />
);

const staticImgQuery = graphql`
  query staticImgQuery {
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
