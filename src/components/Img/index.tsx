import React, { FunctionComponent, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeMode } from "../../styles/theme";
import { StaticImage } from "gatsby-plugin-image";
import { IStaticImageProps } from "gatsby-plugin-image/dist/src/components/static-image.server";

export interface InternalImgProps {
  alt: string;
  src: string;
  srcDark?: string;
}

export type ImgProps = InternalImgProps & IStaticImageProps;

const Img: FunctionComponent<ImgProps> = ({ src, alt, srcDark, ...rest }) => {
  const themeContext = useContext(ThemeContext);
  const computedSrc =
    themeContext.mode === ThemeMode.Light || srcDark === undefined
      ? src
      : srcDark;

  return <StaticImage alt={alt} src={computedSrc} {...rest} />;
};

export default Img;
