import React from "react";
import { SocialRow, StyledPostGridArea } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SocialArea from "../../base/SocialArea";
import SectionTitle from "../../base/SectionTitle";

const PostGridArea = () => {
  return (
    <StyledPostGridArea>
      <Container>
        <SocialRow>
          <Col lg={12}>
            <SocialArea
              socials={[
                {
                  link: "https://www.instagram.com/bestondesk/",
                  type: "instagram",
                },
                {
                  link: "https://www.facebook.com/bestondeskcom/",
                  type: "facebook",
                },
                {
                  link: "https://www.instagram.com/bestondesk/",
                  type: "linkedin",
                },
              ]}
            />
          </Col>
        </SocialRow>
        <Row>
          <Col lg={12}>
            <SectionTitle level={2}>Categoria</SectionTitle>
          </Col>
          <Col lg={12}></Col>
        </Row>
      </Container>
    </StyledPostGridArea>
  );
};

export default PostGridArea;
