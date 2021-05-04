import styled from "styled-components";
import { Link } from "gatsby";
import { HoverFlipItem } from "../HoverFlip/index.style";

const StyledHoverFlipMagnetLinkButton = styled(Link)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    opacity: 1;
    text-align: left;
  }

  &:hover {
    opacity: 1;

    ${HoverFlipItem} span {
      transform: translateY(-105%);
    }

    ${HoverFlipItem} span::before {
      transform: skewY(7deg);
    }

    ${HoverFlipItem} span::after {
      transform: skewY(0);
    }

    @media (pointer: coarse) {
      ${HoverFlipItem} span {
        transform: none;
      }

      ${HoverFlipItem} span::before {
        transform: none;
      }

      ${HoverFlipItem} span::after {
        transform: none;
      }
    }
  }
`;

export { StyledHoverFlipMagnetLinkButton };
