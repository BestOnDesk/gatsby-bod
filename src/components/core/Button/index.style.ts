import styled from "styled-components";
import { HoverFlipItem } from "../HoverFlip/index.style";

export interface StyledButtonProps {
  rounded?: boolean;
  colorSecondaryAlt?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
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
    props.rounded &&
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
    span {
      &::after,
      &::before {
        color: #ffffff;
      }
    }
  }
`;

export { StyledButton };
