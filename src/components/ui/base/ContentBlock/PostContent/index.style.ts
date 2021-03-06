import styled, { css } from "styled-components";
import { StyledTitle } from "../../../../core/Title/index.style";
import { PostContentProps } from "./index";

const StyledPostContent = styled.div<PostContentProps>`
  ${StyledTitle} {
    margin-bottom: 0;
    a {
      position: relative;
      display: inline;
      background-image: linear-gradient(
        to right,
        currentColor 0%,
        currentColor 100%
      );
      background-size: 0px 2px;
      background-position: 0px 95%;
      transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86)
        0s;
      padding: 0.1% 0px;
      background-repeat: no-repeat;
      color: inherit;
      &:hover {
        color: inherit;
      }
    }
  }

  ${(props) =>
    props.noPaddingTop &&
    css`
      padding-top: 0 !important;
    `}
`;

export { StyledPostContent };
