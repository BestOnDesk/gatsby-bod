import styled from "styled-components";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";

const StyledPostMeta = styled.div`
  margin-top: 34px;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.layouts.sm} {
    margin-top: 20px;
  }
`;

const PostAuthorAvatar = styled.div`
  min-width: 50px;
  width: 50px;
  margin-right: 15px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    border-radius: 100%;
  }
`;

const Content = styled.div``;

const PostAuthorName = styled.h6`
  margin-bottom: 4px;
  font-weight: ${(props) => props.theme.fonts.weight.pMedium};
  a {
    ${(props) => props.theme.extends.transition}

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  ${HoverFlipItemWrapper} {
    span {
      &::before {
        color: black;
      }
      &::after {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

const PostMetaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${(props) => props.theme.extends.listStyle}
  margin: -8px;
  li {
    color: ${(props) => props.theme.colors.extra01};
    font-size: ${(props) => props.theme.fonts.size.b4};
    line-height: 18px;
    margin: 8px;
    position: relative;
    &::after {
      right: -10px;
      position: absolute;
      background: ${(props) => props.theme.colors.extra01};
      width: 4px;
      height: 4px;
      border-radius: 100%;
      top: 50%;
      transform: translateY(-50%);
      content: "";
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`;

export {
  StyledPostMeta,
  PostAuthorAvatar,
  Content,
  PostAuthorName,
  PostMetaList,
};
