import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import {
  ContentBlock,
  PostCat,
  PostCatList,
  PostContent,
  PostImage,
  PostThumbnail,
  PostTitle,
  StyledMainSlider,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getCategoryLink, getPostLink } from "../../../../utils/links";
import HoverFlip from "../../../core/HoverFlip";
import SwiperCore, { EffectFade } from "swiper";
import PostMeta from "../PostMeta";

export interface PostSliderPost {
  title: string;
  slug: string;
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

SwiperCore.use([EffectFade]);

const PostsSlider = ({ posts }: PostsSliderProps) => {
  return (
    <StyledMainSlider>
      <Container>
        <Row>
          <Col lg={12}>
            <Swiper effect="fade" loop={true}>
              {posts.map((post, i) => {
                const image = getImage(post.image);
                return (
                  <SwiperSlide key={i}>
                    <ContentBlock>
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
                        <PostMeta author={post.author} />
                      </PostContent>
                    </ContentBlock>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </StyledMainSlider>
  );
};

export default PostsSlider;
