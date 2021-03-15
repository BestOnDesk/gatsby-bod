import React, { FunctionComponent, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeMode } from "../../styles/theme";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { IStaticImageProps } from "gatsby-plugin-image/dist/src/components/static-image.server";
import { graphql, StaticQuery } from "gatsby";

interface InternalStaticImgProps {
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

export type ImgProps = InternalStaticImgProps & IStaticImageProps;

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

        if (imageData) {
          return <GatsbyImage alt={alt} image={imageData} />;
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
