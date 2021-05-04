import React from "react";
import {
  HoverFlipItem,
  HoverFlipItemWrapper,
  HoverFlipSpan,
} from "../HoverFlip/index.style";
import { StyledButton } from "../Button/index.style";
import { HoverFlipProps } from "../HoverFlip";
import { StyledHoverFlipMagnetLinkButton } from "./index.style";

const HoverFlipMagnetButtonLink = ({ children, to }: HoverFlipProps) => {
  return (
    <StyledHoverFlipMagnetLinkButton as={StyledButton} to={to}>
      <HoverFlipItem text={children}>
        <HoverFlipSpan>{children}</HoverFlipSpan>
      </HoverFlipItem>
    </StyledHoverFlipMagnetLinkButton>
  );
};

export default HoverFlipMagnetButtonLink;
