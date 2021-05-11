import styled from "styled-components";
import { Link } from "gatsby";

export interface HoverFlipItemProps {
  text: string;
}

const HoverFlipItem = styled.span<HoverFlipItemProps>`
  position: relative;
  display: inline-block;
  overflow: hidden;

  @media (min-width: 1200px) {
    span {
      display: inline-block;
      position: relative;
      z-index: 1;
      transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
    }

    span::after,
    span::before {
      content: \"${(props) => props.text}\";
      display: block;
      position: absolute;
      color: ${(props) => props.theme.colors.secondary};
    }

    span::before {
      top: 0;
      transform: skewY(0);
      transform-origin: right bottom;
      transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
    }

    span::after {
      top: 105%;
      transform: skewY(7deg);
      transform-origin: left top;
      transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

const HoverFlipSpan = styled.span``;

const HoverFlipItemWrapper = styled(Link)`
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

export { HoverFlipItemWrapper, HoverFlipItem, HoverFlipSpan };
