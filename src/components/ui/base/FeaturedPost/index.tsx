import React from "react";
import {
  ContentBlock,
  PostCat,
  PostCatList,
  PostCol,
  PostContent,
  PostThumbnail,
  StyledFeaturedPost,
  Title,
  TitleSection,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import HoverFlip from "../../../core/HoverFlip";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { getCategoryLink, getPostLink } from "../../../../utils/links";
import { Link } from "gatsby";
import PostMeta from "../PostMeta";

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
                <Title>
                  <Link to={getPostLink(props.left.slug)}>
                    {props.left.title}
                  </Link>
                </Title>
                <PostMeta
                  date={props.left.date}
                  author={props.left.author}
                  readingTime={props.left.readingTime}
                  postSlug={props.left.slug}
                />
              </PostContent>
              <PostThumbnail>
                <Link to={getPostLink(props.left.slug)}>
                  <GatsbyImage
                    image={props.left.image}
                    alt={props.left.title}
                  />
                </Link>
              </PostThumbnail>
            </ContentBlock>
          </PostCol>
          <PostCol lg={6} xl={6} md={12}>
            <ContentBlock>
              <PostContent>
                <PostCat>
                  <PostCatList>
                    {props.right.categories.map((category) => (
                      <HoverFlip to={getCategoryLink(category.slug)}>
                        {category.name}
                      </HoverFlip>
                    ))}
                  </PostCatList>
                </PostCat>
                <Title>
                  <Link to={getPostLink(props.right.slug)}>
                    {props.right.title}
                  </Link>
                </Title>
                <PostMeta
                  date={props.right.date}
                  author={props.right.author}
                  readingTime={props.right.readingTime}
                  postSlug={props.right.slug}
                />
              </PostContent>
              <PostThumbnail>
                <Link to={getPostLink(props.right.slug)}>
                  <GatsbyImage
                    image={props.right.image}
                    alt={props.right.title}
                    style={{ width: "100%" }}
                  />
                </Link>
              </PostThumbnail>
            </ContentBlock>
          </PostCol>
        </Row>
      </Container>
    </StyledFeaturedPost>
  );
};

export default FeaturedPost;
