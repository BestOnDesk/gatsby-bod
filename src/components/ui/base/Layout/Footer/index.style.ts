import styled from "styled-components";
import { StyledTitle } from "../../../../core/Title/index.style";
import { StyledLogo } from "../../Logo/index.style";
import { Col, media } from "styled-bootstrap-grid";
import { HoverFlipItemWrapper } from "../../../../core/HoverFlip/index.style";

const StyledFooter = styled.footer`
  padding: 40px 0;
`;

const FooterMainMenu = styled.div`
  padding-bottom: 80px;
  padding-top: 50px;
`;

const FooterWidget = styled.div`
  margin-top: 40px;

  ${StyledTitle} {
    font-size: 18px;
    line-height: 22px;
    color: #050505;
  }
`;

const Inner = styled.div``;

const FtMenuList = styled.ul`
  ${(props) => props.theme.extends.listStyle};
  li {
    margin-top: 5px;
    margin-bottom: 5px;
    a {
      color: #000000;
      font-size: 16px;
      line-height: 30px;
      transition: 0.3s;
      &:hover {
        color: ${(props) => props.theme.colors.primary} !important;
      }
    }
  }
`;

const FooterTop = styled.div`
  padding-bottom: 30px;
  margin-bottom: 20px;
  padding-top: 30px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background: ${(props) => props.theme.colors.lighter};
    max-width: 1230px;
    height: 1px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
  }
  &::after {
    position: absolute;
    content: "";
    background: ${(props) => props.theme.colors.lighter};
    max-width: 1230px;
    height: 1px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
  }

  ${StyledLogo} {
    img {
      max-height: 37px;
    }
  }
`;

const LogoCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;

  ${media.md`
    justify-content: flex-end;
    margin-top: 0;
  `}

  ${StyledTitle} {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const CopyrightArea = styled.div``;

const CopyrightLeft = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    color: ${(props) => props.theme.colors.midgray};
    font-size: ${(props) => props.theme.fonts.size.b3};
    line-height: ${(props) => props.theme.fonts.height.b3};
  }

  ${StyledLogo} {
    margin-right: 53px;
    img {
      max-height: 37px;
    }
    @media ${(props) => props.theme.layouts.sm} {
      flex-basis: 100%;
      margin-bottom: 20px;
    }
  }
`;

const CopyrightRight = styled.div`
  text-align: left;
  margin-top: 20px;

  ${media.md`
    text-align: right;
    margin-top: 0;
  `}

  p {
    color: ${(props) => props.theme.colors.midgray};
    font-size: ${(props) => props.theme.fonts.size.b3};
    line-height: ${(props) => props.theme.fonts.height.b3};
  }
`;

const CopyrightMainMenu = styled.ul`
  li {
    margin-bottom: 10px;
    @media ${(props) => props.theme.layouts.sm} {
      margin: 0 5px;
    }
    &:first-child {
      margin-left: 0;
    }
    a {
      height: auto;
      line-height: initial;
      &::after {
        display: none;
      }
    }
  }

  ${(props) => props.theme.extends.listStyle}
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -10px;
  li {
    margin: 0 18px;
    a {
      color: ${(props) => props.theme.colors.midgray};
      font-size: 16px;
      line-height: 22px;
      display: block;
      font-weight: 500;
      ${(props) => props.theme.extends.transition}
    }
    ${HoverFlipItemWrapper} {
      span {
        &::before {
          color: ${(props) => props.theme.colors.midgray};
        }
        &::after {
          color: ${(props) => props.theme.colors.midgray};
        }
      }
    }
  }
`;

export {
  StyledFooter,
  FooterMainMenu,
  FooterWidget,
  Inner,
  FtMenuList,
  FooterTop,
  LogoCol,
  SocialContainer,
  CopyrightArea,
  CopyrightLeft,
  CopyrightRight,
  CopyrightMainMenu,
};
