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
import { IGatsbyImageData } from "gatsby-plugin-image";
import { getCategoryLink } from "../../../../utils/links";

export interface FeaturedPostPropsPost {
  title: string;
  slug: string;
  date: string;
  image: IGatsbyImageData;
  readingTime: string;
  author: {
    name: string;
    slug: string;
  };
  categories: {
    name: string;
    slug: string;
  }[];
}

export interface FeaturedPostProps {
  left: FeaturedPostPropsPost;
  right: FeaturedPostPropsPost;
}

const FeaturedPost = (props: FeaturedPostProps) => {
  console.log(props);
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
                    {props.left.categories.map((category) => (
                      <HoverFlip to={getCategoryLink(category.slug)}>
                        {category.name}
                      </HoverFlip>
                    ))}
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
