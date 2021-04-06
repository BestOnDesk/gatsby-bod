import React, { ReactChild } from "react";
import { SocialIcons as SocialIconUl } from "./index.style";

export interface SocialIconsProps {
  colorTertiary?: boolean;
  mdSize?: boolean;
  iconRoundedTransparent?: boolean;
  colorWhite?: boolean;
  justifyContent?: string;
  children: ReactChild | ReactChild[];
}

const SocialIcons = (props: SocialIconsProps) => {
  return <SocialIconUl {...props}>{props.children}</SocialIconUl>;
};

export default SocialIcons;
