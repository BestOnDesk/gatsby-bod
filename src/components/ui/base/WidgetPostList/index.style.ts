import styled, { css } from "styled-components";
import { StyledPostContent } from "../ContentBlock/PostContent/index.style";
import { StyledTitle } from "../../../core/Title/index.style";

const StyledWidgetPostList = styled.div<{ marginBottom?: number }>`
  background: ${(props) => props.theme.colors.extra03};
  padding: 30px;
  border-radius: ${(props) => props.theme.borders.radius};

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}px;
    `}

  ${StyledPostContent} {
    ${StyledTitle} {
      font-weight: ${(props) => props.theme.fonts.weight.sMedium};
    }
  }
`;

const WidgetTitle = styled.h5`
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter};
  padding-bottom: 7px;
  margin-bottom: 20px;
  text-align: center;
`;

const PostMediumBlock = styled.div``;

export { StyledWidgetPostList, WidgetTitle, PostMediumBlock };
