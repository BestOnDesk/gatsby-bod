import React, { PropsWithChildren } from "react";
import { StyledContentBlock } from "./index.style";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ContentBlockProps {
  imageRounded?: boolean;
  modernPostStyle?: boolean;
  postGrid?: boolean;
  postGridLarge?: boolean;
  postGridTransparent?: boolean;
  postGridSmall?: boolean;
  postDefault?: boolean;
  postMedium?: boolean;
  postMediumBorder?: boolean;
  postListView?: boolean;
  borderThin?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
  marginTop?: number;
  marginBottom?: number;
  className?: string;
}

export interface ContentBlockQueryResult {
  shape01: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const ContentBlock = (props: PropsWithChildren<ContentBlockProps>) => {
  const { shape01 } = useStaticQuery<ContentBlockQueryResult>(graphql`
    {
      shape01: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "shapes/shape-01.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <StyledContentBlock
      shape01={shape01.childImageSharp.gatsbyImageData.images.fallback?.src}
      {...props}
    >
      {props.children}
    </StyledContentBlock>
  );
};

export default ContentBlock;
