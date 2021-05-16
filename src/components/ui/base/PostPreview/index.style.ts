import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";
import {
  PostAuthorName,
  PostMetaList,
  StyledPostMeta,
} from "../PostMeta/index.style";
import {
  HoverFlipItem,
  HoverFlipItemWrapper,
} from "../../../core/HoverFlip/index.style";

const StyledPostPreview = styled.div`
  border-radius: ${(props) => props.theme.borders.radius};
  overflow: hidden;
  position: relative;
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

  ${StyledTitle}, p, ${PostAuthorName} ${HoverFlipItemWrapper} span::before {
    color: ${(props) => props.theme.colors.white} !important;
  }

  p {
    margin-bottom: 24px;
  }

  ${StyledPostMeta} {
    margin-top: 24px;
  }

  ${PostMetaList} li {
    color: ${(props) => props.theme.colors.lighter};

    &::after {
      background: ${(props) => props.theme.colors.lighter};
    }
  }
`;

export { StyledPostPreview, BackgroundImage, PreviewContent };
