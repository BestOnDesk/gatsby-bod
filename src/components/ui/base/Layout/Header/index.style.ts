import styled from "styled-components";
import { isDark } from "../../../../../utils/theme";
import { Row } from "styled-bootstrap-grid";
import { StyledLogo } from "./Logo/index.style";

export interface HeaderProps {
  withShadow?: boolean;
}

const Header = styled.header<HeaderProps>`
  padding: 0 60px !important;
  background: #fff !important;
  position: relative !important;
  z-index: 99 !important;

  @media ${(props) => props.theme.layouts.laptopDevice} {
    padding: 0 30px !important;
  }
  @media only screen and (max-width: 1199px) {
    padding: 20px 30px !important;
  }

  ${(props) =>
    props.withShadow &&
    `
        box-shadow: ${props.theme.shadows.primary} !important;
    `}

  ${(props) =>
    isDark(props.theme) &&
    `
        background: ${props.theme.colors.extra04} !important;
    `}

  ${StyledLogo} {
    a {
      display: block !important;

      img {
        max-height: 37px !important;
      }

      @media ${(props) => props.theme.layouts.largeMobile} {
        text-align: center !important;
        margin-bottom: 20px !important;
      }
    }
  }
`;

const HeaderWrap = styled.div``;

const HeaderRow = styled(Row)`
  justify-content: space-between !important;
  align-items: center !important;
`;

export { Header, HeaderWrap, HeaderRow };
