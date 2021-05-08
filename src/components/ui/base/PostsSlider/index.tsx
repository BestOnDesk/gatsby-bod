import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ContentBlock,
  PostCat,
  PostCatList,
  PostContent,
  PostImage,
  PostThumbnail,
  PostTitle,
  SlideArrow,
  StyledMainSlider,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getCategoryLink, getPostLink } from "../../../../utils/links";
import HoverFlip from "../../../core/HoverFlip";
import PostMeta from "../PostMeta";

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
                const image = getImage(post.image);
                return (
                  <ContentBlock key={i}>
                    <PostThumbnail>
                      {image && (
                        <Link to={getPostLink(post.slug)}>
                          <PostImage image={image} alt={post.title} />
                        </Link>
                      )}
                    </PostThumbnail>
                    <PostContent>
                      <PostCat>
                        <PostCatList>
                          {post.categories.map((category, i) => (
                            <HoverFlip
                              to={getCategoryLink(category.slug)}
                              key={i}
                            >
                              {category.name.toUpperCase()}
                            </HoverFlip>
                          ))}
                        </PostCatList>
                      </PostCat>
                      <PostTitle>
                        <Link to={getPostLink(post.slug)}>{post.title}</Link>
                      </PostTitle>
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
