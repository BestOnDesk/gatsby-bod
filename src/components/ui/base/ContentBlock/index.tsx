import React, { PropsWithChildren } from "react";
import { StyledContentBlock } from "./index.style";

export interface ContentBlockProps {
  imageRounded?: boolean;
  modernPostStyle?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
}

const ContentBlock = (props: PropsWithChildren<ContentBlockProps>) => {
  return <StyledContentBlock {...props}>{props.children}</StyledContentBlock>;
};

export default ContentBlock;
