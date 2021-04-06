import styled from "styled-components";
import { SocialIconsProps } from "./index";

const SocialIcons = styled.ul<SocialIconsProps>`
  margin: -5px !important;
  ${(props) => props.theme.extends.listStyle}
  display: flex !important;
  flex-wrap: wrap !important;
  @media ${(props) => props.theme.layouts.lg} {
    margin: -3px !important;
  }
  li {
    margin: 5px !important;
    @media ${(props) => props.theme.layouts.lg} {
      margin: 3px !important;
    }
    a {
      width: 50px !important;
      height: 50px !important;
      line-height: 50px !important;
      border-radius: 100% !important;
      background: ${(props) => props.theme.colors.lightest} !important;
      display: block !important;
      text-align: center !important;
      font-size: 14px !important;
      color: ${(props) => props.theme.colors.gray} !important;
      ${(props) => props.theme.extends.transition}
      &:hover {
        background: ${(props) => props.theme.colors.primary} !important;
        color: ${(props) => props.theme.colors.white} !important;
      }
    }
  }

  ${(props) =>
    props.colorTertiary &&
    `
    li {
      a {
        color: ${props.theme.colors.tertiary} !important;
        &:hover {
          color: ${props.theme.colors.white} !important;
        }
      }
    }
  `}

  ${(props) =>
    props.mdSize &&
    `
    li {
      a {
        width: 40px !important;
        height: 40px !important;
        line-height: 40px !important;
      }
    }
  `}
  
  ${(props) =>
    props.iconRoundedTransparent &&
    `
    li {
      a {
        background: transparent !important;
        border: 1px solid ${props.theme.colors.lighter} !important;
        &:hover {
          color: ${props.theme.colors.white} !important;
          background-color: ${props.theme.colors.primary} !important;
          border-color: ${props.theme.colors.primary} !important;
        }
      }
    }
  `}
  
  ${(props) =>
    props.colorWhite &&
    `
    li {
      a {
        background: #ffffff !important;
        color: #050505 !important;
        &:hover {
          color: ${props.theme.colors.white} !important;
          background-color: ${props.theme.colors.primary} !important;
        }
      }
    }
  `}
    
  ${(props) =>
    props.justifyContent &&
    `
      justify-content: ${props.justifyContent} !important;
    `}
`;

export { SocialIcons };
