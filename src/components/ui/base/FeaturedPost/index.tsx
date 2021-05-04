import React from "react";
import {
  ContentBlock,
  PostCat,
  PostCatList,
  PostCol,
  PostContent,
  StyledFeaturedPost,
  TitleSection,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import HoverFlip from "../../../core/HoverFlip";

export interface FeaturedPostProps {}

const FeaturedPost = (props: FeaturedPostProps) => {
  return (
    <StyledFeaturedPost>
      <Container>
        <Row>
          <Col lg={12}>
            <TitleSection>
              <h2>Altri post importanti</h2>
            </TitleSection>
          </Col>
        </Row>
        <Row>
          <PostCol lg={6} xl={6} md={12}>
            <ContentBlock>
              <PostContent>
                <PostCat>
                  <PostCatList>
                    <HoverFlip to={"/"}>Test categoria</HoverFlip>
                  </PostCatList>
                </PostCat>
              </PostContent>
            </ContentBlock>
          </PostCol>
          <PostCol lg={6} xl={6} md={12}></PostCol>
        </Row>
      </Container>
    </StyledFeaturedPost>
  );
};

export default FeaturedPost;
