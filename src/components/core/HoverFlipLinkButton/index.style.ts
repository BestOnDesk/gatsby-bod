import styled from "styled-components";
import { HoverFlipItem, HoverFlipItemWrapper } from "../HoverFlip/index.style";
import { Link } from "gatsby";

export interface StyledButtonProps {
  buttonRounded?: boolean;
  colorSecondaryAlt?: boolean;
}

const StyledHoverFlipLinkButton = styled(Link)<StyledButtonProps>`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fonts.weight.pMedium};
  font-size: ${(props) => props.theme.fonts.size.b2};
  display: inline-block;
  border: 2px solid ${(props) => props.theme.colors.primary};
  ${(props) => props.theme.extends.transition}
  padding: 0 30px;
  height: 50px;
  line-height: 46px;

  ${(props) =>
    props.buttonRounded &&
    `
        border-radius: 500px;
    `}

  ${(props) =>
    props.colorSecondaryAlt &&
    `
    background: ${props.theme.colors.secondaryAlt};
    border-color: ${props.theme.colors.secondaryAlt};
    &:hover {
      color: ${props.theme.colors.secondaryAlt};
      background: transparent;
    }
    `}
  
  ${HoverFlipItem} {
    color: ${(props) => props.theme.colors.white};

    span {
      &::after,
      &::before {
        color: #ffffff;
      }
    }
  }

  &:hover {
    ${HoverFlipItemWrapper} {
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
  }
`;

export { StyledHoverFlipLinkButton };
