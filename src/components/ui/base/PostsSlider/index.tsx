import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideArrow, StyledMainSlider } from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getPostLink } from "../../../../utils/links";
import PostMeta from "../PostMeta";
import PostThumbnail from "../ContentBlock/PostThumbnail";
import ContentBlock from "../ContentBlock";
import Title from "../../../core/Title";
import PostCat from "../ContentBlock/PostContent/PostCat";
import PostContent from "../ContentBlock/PostContent";

export interface PostSliderPost {
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

export interface PostsSliderProps {
  posts: PostSliderPost[];
}

const PostsSlider = ({ posts }: PostsSliderProps) => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    adaptiveHeight: true,
    cssEase: "linear",
    prevArrow: (
      <SlideArrow>
        <i className="fal fa-arrow-left" />
      </SlideArrow>
    ),
    nextArrow: (
      <SlideArrow nextArrow>
        <i className="fal fa-arrow-right" />
      </SlideArrow>
    ),
  };

  return (
    <StyledMainSlider>
      <Container>
        <Row>
          <Col lg={12}>
            <Slider {...sliderSettings}>
              {posts.map((post, i) => {
                return (
                  <ContentBlock key={i}>
                    <PostThumbnail
                      image={post.image}
                      alt={post.title}
                      link={getPostLink(post.slug)}
                    />
                    <PostContent>
                      <PostCat categories={post.categories} />
                      <Title level={2}>
                        <Link to={getPostLink(post.slug)}>{post.title}</Link>
                      </Title>
                      <PostMeta
                        author={post.author}
                        date={post.date}
                        readingTime={post.readingTime}
                        postSlug={post.slug}
                        withButton
                        withShareButtons
                      />
                    </PostContent>
                  </ContentBlock>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </StyledMainSlider>
  );
};

export default PostsSlider;
