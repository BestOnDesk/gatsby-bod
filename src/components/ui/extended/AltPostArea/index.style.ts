import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";
import {
  PostAuthorName,
  PostMetaList,
  StyledPostMeta,
} from "../../base/PostMeta/index.style";
import { HoverFlipItem } from "../../../core/HoverFlip/index.style";
import { StyledPostThumbnail } from "../../base/ContentBlock/PostThumbnail/index.style";
import { media } from "styled-bootstrap-grid";

const StyledAltPostArea = styled.section`
  padding: 80px 0;
  background: ${(props) => props.theme.colors.extra04};
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }

  ${StyledTitle}, ${PostAuthorName}, ${PostAuthorName} ${HoverFlipItem} span::before {
    color: ${(props) => props.theme.colors.white};
  }

  ${PostMetaList} li {
    color: ${(props) => props.theme.colors.midgray};
  }

  ${StyledPostThumbnail} {
    a > div {
      width: 100%;
    }
  }

  ${StyledPostMeta} {
    display: none;

    ${media.md`
      display: flex;
    `}
  }
`;

export { StyledAltPostArea };
