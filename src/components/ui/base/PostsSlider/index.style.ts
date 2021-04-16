import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";

const StyledMainSlider = styled.section`
  background-color: ${(props) => props.theme.colors.lightest};
`;

const ContentBlock = styled.div`
  position: relative;
  padding-bottom: 120px;
  margin-bottom: 3px;

  @media ${(props) => props.theme.layouts.sm} {
    padding-bottom: 70px;
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

const PostTitle = styled.h2``;

export {
  StyledMainSlider,
  ContentBlock,
  PostThumbnail,
  PostImage,
  PostContent,
  PostCat,
  PostCatList,
  PostTitle,
};
