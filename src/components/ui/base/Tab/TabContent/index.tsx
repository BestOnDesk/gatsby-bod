import React from "react";
import { SingleTabContent, StyledTabContent } from "./index.style";
import Slider from "react-slick";
import ContentBlock from "../../ContentBlock";
import PostContent from "../../ContentBlock/PostContent";
import PostCat from "../../ContentBlock/PostContent/PostCat";
import PostThumbnail from "../../ContentBlock/PostThumbnail";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { getPostLink } from "../../../../../utils/links";
import Title from "../../../../core/Title";
import { Link } from "gatsby";

export interface TabContentProps {
  categories: {
    slug: string;
    name: string;
    posts: {
      nodes: {
        date: string;
        slug: string;
        title: string;
        featuredImage: {
          node: {
            localFile: {
              childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
              };
            };
          };
        };
      }[];
    };
  }[];
  selectedIndex: number;
  maxSliderPosts: number;
}

const TabContent = (props: TabContentProps) => {
  const sliderSettings = {
    className: "slick-layout-wrapper",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: true,
    prevArrow: (
      <button className="slide-arrow prev-arrow">
        <i className="fal fa-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="slide-arrow next-arrow">
        <i className="fal fa-arrow-right"></i>
      </button>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  console.log(props.categories);

  return (
    <StyledTabContent>
      {props.categories.map((category, z) => {
        return (
          <SingleTabContent
            role="tabpanel"
            active={z === props.selectedIndex}
            key={z}
          >
            <Slider {...sliderSettings}>
              {category.posts.nodes
                .slice(0, props.maxSliderPosts)
                .map((post, i) => {
                  return (
                    <ContentBlock key={i} modernPostStyle textCenter>
                      <PostContent>
                        <PostCat
                          categories={[
                            { name: category.name, slug: category.slug },
                          ]}
                        />
                        <Title level={4}>
                          <Link to={getPostLink(post.slug)}>{post.title}</Link>
                        </Title>
                      </PostContent>
                      <PostThumbnail
                        image={
                          post.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={post.title}
                        link={getPostLink(post.slug)}
                      />
                    </ContentBlock>
                  );
                })}
            </Slider>
          </SingleTabContent>
        );
      })}
    </StyledTabContent>
  );
};

export default TabContent;
