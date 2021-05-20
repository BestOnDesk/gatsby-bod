import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";
import { StyledSocialShare } from "../SocialShare/index.style";

const StyledAboutAuthor = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter};
  border-top: 1px solid ${(props) => props.theme.colors.lighter};
  .media-body {
  }
`;

const Media = styled.div`
  display: flex;
`;

const Thumbnail = styled.div`
  display: flex;
  a > div {
    display: flex;
    overflow: hidden;
    border-radius: 100%;
    margin-right: 53px;
    margin-bottom: 20px;
    @media ${(props) => props.theme.layouts.sm} {
      margin-right: 20px;
    }
  }
`;

const MediaBody = styled.div``;

const AuthorInfo = styled.div`
  ${StyledTitle} {
    margin-bottom: 0;
    a {
      ${(props) => props.theme.extends.transition}
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
  }
`;

const Subtitle = styled.span`
  color: ${(props) => props.theme.colors.gray};
  display: block;
  margin-top: 10px;
  font-size: ${(props) => props.theme.fonts.size.b3};
  line-height: ${(props) => props.theme.fonts.height.b3};
  @media ${(props) => props.theme.layouts.sm} {
    margin-top: 8px;
  }
`;

const Content = styled.div`
  ${StyledSocialShare} {
    margin-top: 20px;
    @media ${(props) => props.theme.layouts.sm} {
      margin-top: 12px;
    }
  }
`;

const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 0;

  @media ${(props) => props.theme.layouts.sm} {
    margin-top: 6px;
  }
`;

export {
  StyledAboutAuthor,
  Media,
  Thumbnail,
  MediaBody,
  AuthorInfo,
  Subtitle,
  Description,
  Content,
};
