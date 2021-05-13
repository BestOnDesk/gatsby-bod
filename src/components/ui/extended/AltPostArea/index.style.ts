import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";
import { PostAuthorName, PostMetaList } from "../../base/PostMeta/index.style";
import { HoverFlipItem } from "../../../core/HoverFlip/index.style";

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
`;

export { StyledAltPostArea };
