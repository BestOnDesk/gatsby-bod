import * as React from "react";
import { Header as HeaderStyled, HeaderWrap } from "./index.style";
import { Col, Row } from "styled-bootstrap-grid";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrap>
        <Row alignItems="center" justifyContent="between">
          <Col xl={3} lg={3} md={4} sm={3} xs={12}>
            <Logo />
          </Col>
          <Col xl={6} hiddenXlDown>
            <Menu />
          </Col>
        </Row>
      </HeaderWrap>
    </HeaderStyled>
  );
};

export default Header;
