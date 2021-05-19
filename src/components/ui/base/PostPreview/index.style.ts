import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";
import {
  PostAuthorName,
  PostMetaList,
  StyledPostMeta,
} from "../PostMeta/index.style";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";
import { StyledSocialShare } from "../SocialShare/index.style";

const StyledPostPreview = styled.div`
  border-radius: ${(props) => props.theme.borders.radius};
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;
`;

const BackgroundImage = styled.div<{ backgroundSrc?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      transparent,
      ${(props) => props.theme.colors.extra04}
    ),
    url("${(props) => props.backgroundSrc}");
  background-size: cover;
  background-position: center;
  filter: blur(1.5px);
  z-index: -10;
`;

const PreviewContent = styled.div`
  padding: 24px;

  ${StyledTitle}, p, ${PostAuthorName} ${HoverFlipItemWrapper} span::before, ${PostAuthorName} ${HoverFlipItemWrapper} span {
    color: ${(props) => props.theme.colors.white} !important;
  }

  p {
    margin-bottom: 24px;
  }

  ${StyledPostMeta} {
    margin-top: 24px;

    ${PostMetaList} li {
      color: ${(props) => props.theme.colors.lighter};

      &::after {
        background: ${(props) => props.theme.colors.lighter};
      }
    }

    ${StyledSocialShare} {
      a,
      button {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

export { StyledPostPreview, BackgroundImage, PreviewContent };
