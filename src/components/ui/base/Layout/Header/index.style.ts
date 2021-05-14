import styled, { css } from "styled-components";
import { isDark } from "../../../../../utils/theme";
import { Row } from "styled-bootstrap-grid";
import { StyledLogo } from "../../Logo/index.style";
import { HeaderProps } from "./index";

const Header = styled.header<HeaderProps>`
  padding: 0 60px;
  background: #fff;
  position: relative;
  z-index: 99;

  @media ${(props) => props.theme.layouts.laptopDevice} {
    padding: 0 30px;
  }
  @media only screen and (max-width: 1199px) {
    padding: 20px 30px;
  }

  ${(props) =>
    props.withShadow &&
    css`
      box-shadow: ${props.theme.shadows.primary};
    `}

  ${(props) =>
    props.sticky &&
    css`
      position: fixed;
      width: 100%;
    `}

  ${(props) =>
    isDark(props.theme) &&
    css`
      background: ${props.theme.colors.extra04};
    `}

  ${StyledLogo} {
    a {
      display: block;

      img {
        max-height: 37px;
      }

      @media ${(props) => props.theme.layouts.largeMobile} {
        text-align: center;
        margin-bottom: 12px;
      }
    }
  }
`;

const HeaderWrap = styled.div`
  ${StyledLogo} {
    @media ${(props) => props.theme.layouts.largeMobile} {
      justify-content: center;
    }
  }
`;

const HeaderRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

export { Header, HeaderWrap, HeaderRow };
