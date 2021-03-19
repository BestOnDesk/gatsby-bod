import styled from "styled-components";

export interface HoverFlipSpanProps {
  text: string;
}

const HoverFlipItem = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const HoverFlipSpan = styled.span<HoverFlipSpanProps>`
  @media (min-width: 1200px) {
    display: inline-block;
    position: relative;
    z-index: 1;
    color: transparent;
    transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);

    &:after,
    &:before {
      content: ${(props) => props.text};
      display: block;
      position: absolute;
      color: ${(props) => props.theme.colors.secondary};
    }

    &:before {
      top: 0;
      transform: skewY(0);
      transform-origin: right bottom;
      transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:after {
      top: 105%;
      transform: skewY(7deg);
      transform-origin: left top;
      transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

const HoverFlipItemWrapper = styled.a`
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

    ${HoverFlipSpan} {
      transform: translateY(-105%);
    }

    ${HoverFlipSpan}:before {
      transform: skewY(7deg);
    }

    ${HoverFlipSpan}:after {
      transform: skewY(0);
    }

    @media (pointer: coarse) {
      ${HoverFlipSpan} {
        transform: none;
      }

      ${HoverFlipSpan}:before {
        transform: none;
      }

      ${HoverFlipSpan}:after {
        transform: none;
      }
    }
  }
`;

export { HoverFlipItemWrapper, HoverFlipItem, HoverFlipSpan };
