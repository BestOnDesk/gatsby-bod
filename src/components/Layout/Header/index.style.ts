import styled from "styled-components";
import { layout } from "../../../styles/variables";
import { isDark } from "../../../utils/theme";
import { Row } from "styled-bootstrap-grid";

export interface HeaderProps {
  withShadow?: boolean;
}

const Header = styled.header<HeaderProps>`
  padding: 0 60px !important;
  background: #fff !important;
  position: relative !important;
  z-index: 99 !important;

  @media ${layout.laptopDevice} {
    padding: 0 30px !important;
  }
  @media only screen and (max-width: 1199px) {
    padding: 20px 30px !important;
  }

  ${(props) =>
    props.withShadow &&
    `
        box-shadow: var(--shadow-primary) !important;
    `}

  ${(props) =>
    isDark(props.theme) &&
    `
        background: var(--color-extra04) !important;
    `}
`;

const HeaderWrap = styled.div``;

const HeaderRow = styled(Row)`
  justify-content: space-between !important;
  align-items: center !important;
`;

export { Header, HeaderWrap, HeaderRow };
