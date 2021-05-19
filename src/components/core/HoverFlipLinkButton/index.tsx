import React, { useRef } from "react";
import { StyledHoverFlipLinkButton } from "./index.style";
import {
  HoverFlipItem,
  HoverFlipItemWrapper,
  HoverFlipSpan,
} from "../HoverFlip/index.style";

export interface HoverFlipLinkButtonProps {
  children: string;
  buttonRounded?: boolean;
  colorSecondaryAlt?: boolean;
  to: string;
}

const HoverFlipLinkButton = ({
  children,
  to,
  ...rest
}: HoverFlipLinkButtonProps) => {
  const buttonRef = useRef(null);

  return (
    <StyledHoverFlipLinkButton ref={buttonRef} to={to} {...rest}>
      <HoverFlipItemWrapper to={to}>
        <HoverFlipItem text={children}>
          <HoverFlipSpan>{children}</HoverFlipSpan>
        </HoverFlipItem>
      </HoverFlipItemWrapper>
    </StyledHoverFlipLinkButton>
  );
};

export default HoverFlipLinkButton;
