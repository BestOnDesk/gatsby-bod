import * as React from "react";
import { Header as HeaderStyled, HeaderWrap } from "./index.style";
import { Col, Row } from "styled-bootstrap-grid";
import Menu from "./Menu";
import HeaderSearch from "./HeaderSearch";
import Logo from "../../Logo";

export interface HeaderProps {
  withShadow?: boolean;
  sticky?: boolean;
  openMobileMenu: Function;
}

const Header = (props: HeaderProps) => {
  return (
    <HeaderStyled {...props} id={"main-header"}>
      <HeaderWrap>
        <Row alignItems="center" justifyContent="between">
          <Col xl={3} lg={3} md={4} sm={3} xs={12}>
            <Logo />
          </Col>
          <Col xl={6} hiddenXlDown>
            <Menu />
          </Col>
          <Col xl={3} lg={8} md={8} sm={9} xs={12}>
            <HeaderSearch openMobileMenu={props.openMobileMenu} />
          </Col>
        </Row>
      </HeaderWrap>
    </HeaderStyled>
  );
};

export default Header;
