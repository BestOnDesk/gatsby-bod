import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import { Banner, Description, Inner } from "../styles/chi-siamo.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Title from "../components/core/Title";

export default () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"Chi siamo"} description={"Chi siamo"} />

      <Banner>
        <Container>
          <Row>
            <Col lg={12}>
              <Inner>
                <Title level={1}>Chi siamo</Title>
                <Description>Ciao ciao ciao Ciao ciao ciao</Description>
              </Inner>
            </Col>
          </Row>
        </Container>
      </Banner>
    </GlobalWrapper>
  );
};
