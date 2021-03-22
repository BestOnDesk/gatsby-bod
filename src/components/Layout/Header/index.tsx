import * as React from "react";
import { Header as HeaderStyled, HeaderWrap } from "./index.style";
import { Col, Row } from "styled-bootstrap-grid";
import Logo from "./Logo";
import Menu from "./Menu";

// TODO: change hiddenLgDown to hiddenXlDown when styled-bootstrap-grid will be fixed

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrap>
        <Row alignItems="center" justifyContent="between">
          <Col xl={3} lg={3} md={4} sm={3} xs={12}>
            <Logo />
          </Col>
          <Col xl={6} hiddenLgDown>
            <Menu />
          </Col>
          <Col xl={3} lg={8} md={8} sm={9} xs={12}></Col>
        </Row>
      </HeaderWrap>
    </HeaderStyled>
  );
};

export default Header;
