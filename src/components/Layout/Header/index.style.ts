import styled from "styled-components";
import { isDark } from "../../../utils/theme";
import { Row } from "styled-bootstrap-grid";

export interface HeaderProps {
  withShadow?: boolean;
}

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
    `
        box-shadow: ${props.theme.shadows.primary};
    `}

  ${(props) =>
    isDark(props.theme) &&
    `
        background: ${props.theme.colors.extra04};
    `}
`;

const HeaderWrap = styled.div``;

const HeaderRow = styled(Row)`
  justify-content: space-between !important;
  align-items: center !important;
`;

export { Header, HeaderWrap, HeaderRow };
