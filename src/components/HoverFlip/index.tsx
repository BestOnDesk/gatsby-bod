import React from "react";
import { GatsbyLinkProps } from "gatsby-link";
import {
  HoverFlipItem,
  HoverFlipItemWrapper,
  HoverFlipSpan,
} from "./index.style";

export interface HoverFlipProps extends GatsbyLinkProps<undefined> {
  children: string;
}

const HoverFlip = ({ to, children }: HoverFlipProps) => {
  return (
    <HoverFlipItemWrapper>
      <HoverFlipItem>
        <HoverFlipSpan text={children}>{children}</HoverFlipSpan>
      </HoverFlipItem>
    </HoverFlipItemWrapper>
  );
};

export default HoverFlip;
