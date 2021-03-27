import styled from "styled-components";
import { Link } from "gatsby";
import { HoverFlipItemWrapper } from "../../../../../HoverFlip/index.style";

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

const PostCat = styled.div`
  margin-bottom: 10px;
`;

const PostThumbnail = styled.div``;

const PostLink = styled(Link)``;

const PostContent = styled.div``;

const Title = styled.h5`
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
    transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
    padding: 0.1% 0;
    background-repeat: no-repeat;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
`;

const ContentBlock = styled.div`
  ${PostThumbnail} {
    position: relative;
    a {
      display: block;
      overflow: hidden;
      border-radius: ${(props) => props.theme.borders.radius};
      & .gatsby-image-wrapper {
        border-radius: ${(props) => props.theme.borders.radius};
      }
      img {
        width: 100%;
      }
    }
  }

  &:hover {
    ${PostContent} {
      ${Title} {
        a {
          background-size: 100% 2px;
        }
      }
    }
  }
`;

const ContentBlockImgRounded = styled(ContentBlock)`
  ${PostThumbnail} {
    ${(props) => props.theme.extends.radius}
    overflow: hidden;
    img {
      ${(props) => props.theme.extends.radius}
      transition: 0.5s;
    }
  }
  &:hover {
    ${PostThumbnail} {
      img {
        transform: scale(1.1);
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
