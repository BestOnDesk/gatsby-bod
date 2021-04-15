import styled from "styled-components";
import { SocialIconsProps } from "./index";

const SocialIcons = styled.ul<SocialIconsProps>`
  margin: -5px;
  ${(props) => props.theme.extends.listStyle}
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.layouts.lg} {
    margin: -3px;
  }
  li {
    margin: 5px;
    @media ${(props) => props.theme.layouts.lg} {
      margin: 3px;
    }
    a {
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 100%;
      background: ${(props) => props.theme.colors.lightest};
      display: block;
      text-align: center;
      font-size: 14px;
      color: ${(props) => props.theme.colors.gray};
      ${(props) => props.theme.extends.transition}
      &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  ${(props) =>
    props.colorTertiary &&
    `
    li {
      a {
        color: ${props.theme.colors.tertiary};
        &:hover {
          color: ${props.theme.colors.white};
        }
      }
    }
  `}

  ${(props) =>
    props.mdSize &&
    `
    li {
      a {
        width: 40px;
        height: 40px;
        line-height: 40px;
      }
    }
  `}
  
  ${(props) =>
    props.iconRoundedTransparent &&
    `
    li {
      a {
        background: transparent;
        border: 1px solid ${props.theme.colors.lighter};
        &:hover {
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.primary};
          border-color: ${props.theme.colors.primary};
        }
      }
    }
  `}
  
  ${(props) =>
    props.colorWhite &&
    `
    li {
      a {
        background: #ffffff;
        color: #050505;
        &:hover {
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.primary};
        }
      }
    }
  `}
    
  ${(props) =>
    props.justifyContent &&
    `
      justify-content: ${props.justifyContent};
    `}
`;

export { SocialIcons };
