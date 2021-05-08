import React from "react";
import { SingleTabContent, StyledTabContent } from "./index.style";
import Slider from "react-slick";
import ContentBlock from "../../ContentBlock";
import PostContent from "../../ContentBlock/PostContent";
import PostCat from "../../ContentBlock/PostContent/PostCat";

export interface TabContentProps {
  posts: {
    slug: string;
  }[];
}

const TabContent = (props: TabContentProps) => {
  const sliderSettings = {
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
  return (
    <StyledTabContent>
      <SingleTabContent role="tabpanel" active={true}>
        <Slider {...sliderSettings}>
          {props.posts.map((post, i) => {
            console.log(i);
            return (
              <ContentBlock key={i} modernPostStyle textCenter>
                <PostContent>
                  <PostCat
                    categories={[{ slug: "test", name: "test categoria" }]}
                  />
                </PostContent>
              </ContentBlock>
            );
          })}
        </Slider>
      </SingleTabContent>
    </StyledTabContent>
  );
};

export default TabContent;
