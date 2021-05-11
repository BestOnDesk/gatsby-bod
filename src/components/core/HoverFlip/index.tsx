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

// TODO: Fix HoverFlip colors

const HoverFlip = ({ to, children }: HoverFlipProps) => {
  return (
    <HoverFlipItemWrapper to={to}>
      <HoverFlipItem text={children}>
        <HoverFlipSpan>{children}</HoverFlipSpan>
      </HoverFlipItem>
    </HoverFlipItemWrapper>
  );
};

export default HoverFlip;
