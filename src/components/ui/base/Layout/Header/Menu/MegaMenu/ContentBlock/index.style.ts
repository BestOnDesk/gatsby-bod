import styled from "styled-components";
import { Link } from "gatsby";
import { HoverFlipItemWrapper } from "../../../../../../../core/HoverFlip/index.style";

const PostCatList = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  margin: -8px !important;

  a {
    color: ${(props) => props.theme.colors.secondary} !important;
    ${(props) => props.theme.extends.transition}
    display: flex !important;
    font-size: ${(props) => props.theme.fonts.size.b3} !important;
    line-height: 20px !important;
    margin: 8px !important;
    position: relative !important;
    font-weight: ${(props) => props.theme.fonts.weight.pMedium} !important;
    ${(props) => props.theme.extends.transition}

    &:hover {
      color: ${(props) => props.theme.colors.primary} !important;
    }

    &::after {
      content: "," !important;
      position: absolute !important;
      right: 0 !important;
    }

    &:last-child {
      &::after {
        display: none !important;
      }
    }
  }

  ${HoverFlipItemWrapper} {
    span {
      &::after {
        color: ${(props) => props.theme.colors.primary} !important;
      }
    }
  }
`;

const PostCat = styled.div`
  margin-bottom: 10px !important;
`;

const PostThumbnail = styled.div``;

const PostLink = styled(Link)``;

const PostContent = styled.div``;

const Title = styled.h5`
  margin-bottom: 0 !important;

  a {
    position: relative !important;
    display: inline !important;
    background-image: linear-gradient(
      to right,
      currentColor 0%,
      currentColor 100%
    ) !important;
    background-size: 0 2px !important;
    background-position: 0 95% !important;
    transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s !important;
    padding: 0.1% 0 !important;
    background-repeat: no-repeat !important;
    color: inherit !important;
    &:hover {
      color: inherit !important;
    }
  }
`;

const ContentBlock = styled.div`
  ${PostThumbnail} {
    position: relative !important;
    a {
      display: block !important;
      overflow: hidden !important;
      border-radius: ${(props) => props.theme.borders.radius} !important;
      & .gatsby-image-wrapper {
        border-radius: ${(props) => props.theme.borders.radius} !important;
      }
      img {
        width: 100% !important;
      }
    }
  }

  &:hover {
    ${PostContent} {
      ${Title} {
        a {
          background-size: 100% 2px !important;
        }
      }
    }
  }
`;

const ContentBlockImgRounded = styled(ContentBlock)`
  ${PostThumbnail} {
    ${(props) => props.theme.extends.radius}
    overflow: hidden !important;
    img {
      ${(props) => props.theme.extends.radius}
      transition: 0.5s !important;
    }
  }
  &:hover {
    ${PostThumbnail} {
      img {
        transform: scale(1.1) !important;
      }
    }
  }
`;

export {
  ContentBlock,
  ContentBlockImgRounded,
  PostThumbnail,
  PostLink,
  PostContent,
  Title,
  PostCat,
  PostCatList,
};
