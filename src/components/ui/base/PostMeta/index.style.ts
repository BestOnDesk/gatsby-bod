import styled from "styled-components";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";
import SocialShare from "../SocialShare";

const StyledPostMeta = styled.div<{ noMargin?: boolean }>`
  margin-top: ${(props) => (props.noMargin ? "0" : "34px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${(props) => props.theme.layouts.sm} {
    margin-top: ${(props) => (props.noMargin ? "0" : "20px")};
  }

  @media ${(props) => props.theme.layouts.largeMobile} {
    display: block;
  }
`;

const PostMetaDiv = styled.div`
  display: flex;
  align-items: center;
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
        color: ${(props) => props.theme.colors.heading};
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
    font-weight: ${(props) => props.theme.fonts.weight.pRegular};
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

const SocialShareTransparent = styled(SocialShare)`
  margin-right: 58px;
  justify-content: end;

  @media ${(props) => props.theme.layouts.sm} {
    margin-right: 0;
    margin-top: 12px;
  }

  @media ${(props) => props.theme.layouts.largeMobile} {
    margin-top: 12px;
    justify-content: flex-start !important;
  }
`;

const ReadMoreButton = styled.div`
  position: absolute;
  right: -40px;
  display: inline-block;

  @media ${(props) => props.theme.layouts.sm} {
    position: static;
    right: 0;
    margin-top: 12px;
    flex-basis: 100%;
  }
`;

export {
  StyledPostMeta,
  PostMetaDiv,
  PostAuthorAvatar,
  Content,
  PostAuthorName,
  PostMetaList,
  SocialShareTransparent,
  ReadMoreButton,
};
