import styled from "styled-components";
import { StyledContentBlock } from "../ContentBlock/index.style";
import { StyledTitle } from "../../../core/Title/index.style";
import { StyledPostContent } from "../ContentBlock/PostContent/index.style";
import { StyledPostThumbnail } from "../ContentBlock/PostThumbnail/index.style";
import { StyledPostCat } from "../ContentBlock/PostContent/PostCat/index.style";

export interface SlideArrowProps {
  nextArrow?: boolean;
}

const StyledMainSlider = styled.section`
  background-color: ${(props) => props.theme.colors.lightest};

  .slick-active {
    z-index: 10;
  }

  ${StyledContentBlock} {
    position: relative;
    padding-bottom: 120px;
    margin-bottom: 3px;

    @media ${(props) => props.theme.layouts.sm} {
      padding-bottom: 70px;
    }

    &:hover {
      ${StyledTitle} {
        a {
          color: inherit;
          background-size: 100% 3px;
        }
      }
    }
  }

  ${StyledPostContent} {
    position: absolute;
    background: ${(props) => props.theme.colors.white};
    width: 570px;
    padding: 40px 42px;
    border-radius: ${(props) => props.theme.borders.radius};
    right: 100px;
    bottom: 0;
    padding-right: 58px;

    @media ${(props) => props.theme.layouts.md} {
      width: 510px;
      right: 40px;
    }

    @media ${(props) => props.theme.layouts.sm} {
      position: static;
      border-radius: 0 0 10px 10px;
      width: 100%;
      padding: 30px;
    }
  }

  ${StyledPostThumbnail} {
    position: relative;
    a {
      border-radius: 0 0 10px 10px;
      img {
        border-radius: 0 0 10px 10px;
        @media ${(props) => props.theme.layouts.sm} {
          border-radius: 0;
        }
      }
    }
  }

  ${StyledPostCat} {
    margin-bottom: 20px;

    @media ${(props) => props.theme.layouts.sm} {
      margin-bottom: 0;
    }
  }

  ${StyledTitle} {
    margin-bottom: 0;

    @media ${(props) => props.theme.layouts.sm} {
      font-size: 21px;
      line-height: 30px;
    }
  }
`;

const SlideArrow = styled.button<SlideArrowProps>`
  top: auto;
  right: auto;
  outline: none;
  font-size: 18px;
  padding: 1px 6px;
  line-height: normal;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.midgray};
  border-radius: 100%;
  z-index: 2;
  position: absolute;
  left: 105px;
  bottom: 43px;
  transform: none;

  i {
    color: ${(props) => props.theme.colors.gray};
  }

  &:hover {
    background: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.shadows.primary};
    border: 1px solid ${(props) => props.theme.colors.white};
    i {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media ${(props) => props.theme.layouts.md} {
    left: 0;
  }

  @media ${(props) => props.theme.layouts.sm} {
    left: 0;
    bottom: 0;
  }

  ${(props) =>
    props.nextArrow &&
    `
    left: 175px;
    @media ${props.theme.layouts.md} {
    left: 59px;
    }
    @media ${props.theme.layouts.sm} {
      left: 75px;
    }
    `}
`;

export { StyledMainSlider, SlideArrow };
