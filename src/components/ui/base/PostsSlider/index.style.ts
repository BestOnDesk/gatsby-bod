import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";

export interface SlideArrowProps {
  nextArrow?: boolean;
}

const StyledMainSlider = styled.section`
  background-color: ${(props) => props.theme.colors.lightest};

  .slick-active {
    z-index: 10;
  }
`;

const PostTitle = styled.h2`
  margin-bottom: 0;

  a {
    position: relative;
    display: inline;
    background-image: linear-gradient(
      to right,
      currentColor 0%,
      currentColor 100%
    );
    background-size: 0 2px;
    background-position: 0 95%;
    transition: background-size 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
    padding: 0.1% 0;
    background-repeat: no-repeat;
    color: inherit;
    &:hover {
      color: inherit;
      background-size: 100% 3px;
    }
  }
`;

const ContentBlock = styled.div`
  position: relative;
  padding-bottom: 120px;
  margin-bottom: 3px;

  @media ${(props) => props.theme.layouts.sm} {
    padding-bottom: 70px;
  }

  &:hover {
    ${PostTitle} {
      a {
        color: inherit;
        background-size: 100% 3px;
      }
    }
  }
`;

const PostThumbnail = styled.div`
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
`;

const PostImage = styled(GatsbyImage)`
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;

const PostContent = styled.div`
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
`;

const PostCat = styled.div`
  margin-bottom: 20px;
`;

const PostCatList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -8px;

  a {
    color: ${(props) => props.theme.colors.secondary};
    ${(props) => props.theme.extends.transition}
    display: flex;
    font-size: ${(props) => props.theme.fonts.size.b3};
    line-height: 20px;
    margin: 8px;
    position: relative;
    font-weight: ${(props) => props.theme.fonts.weight.pMedium};
    ${(props) => props.theme.extends.transition}

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

    &::after {
      content: ",";
      position: absolute;
      right: 0;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  ${HoverFlipItemWrapper} {
    span {
      &::after {
        color: ${(props) => props.theme.colors.primary};
      }
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

export {
  StyledMainSlider,
  ContentBlock,
  PostThumbnail,
  PostImage,
  PostContent,
  PostCat,
  PostCatList,
  PostTitle,
  SlideArrow,
};
