import styled, { css } from "styled-components";
import { StyledPostThumbnail } from "./PostThumbnail/index.style";
import { ContentBlockProps } from "./index";
import { PostCatList } from "./PostContent/PostCat/index.style";
import { StyledPostContent } from "./PostContent/index.style";
import { StyledTitle } from "../../../core/Title/index.style";

const StyledContentBlock = styled.div<ContentBlockProps>`
  ${(props) =>
    props.imageRounded &&
    css`
      ${StyledPostThumbnail} {
        ${(props) => props.theme.extends.radius}
        overflow: hidden;
        img {
          ${(props) => props.theme.extends.radius}
          transition: 0.5s;
        }
      }
      &:hover {
        ${StyledPostThumbnail} {
          img {
            transform: scale(1.1);
          }
        }
      }
    `}

  ${(props) =>
    props.modernPostStyle &&
    css`
      border-radius: ${(props) => props.theme.borders.radius};
      background: ${(props) => props.theme.colors.lightest};
      padding: 50px 35px 0;
      overflow: hidden;
      @media ${(props) => props.theme.layouts.md} {
        padding: 40px 20px 0;
      }

      ${props.textCenter &&
      css`
        ${PostCatList} {
          justify-content: center;
        }
      `}

      ${props.textCenter &&
      css`
        ${PostCatList} {
          justify-content: flex-end;
        }
      `}

      ${StyledPostContent} {
        padding-bottom: 50px;
        ${StyledTitle} {
          margin-bottom: 0;
        }
      }

      ${StyledPostThumbnail} {
        margin: 0 -35px;
        position: relative;
        @media ${(props) => props.theme.layouts.md} {
          margin: 0 -20px;
        }
        &::before {
          content: "";
          background: url("../images/icons/shape-01.png");
          height: 77px;
          width: 100%;
          position: absolute;
          left: 0;
          top: -3px;
          z-index: 5;
          background-position: center center;
          background-size: cover;
        }
        a {
          img {
            transition: 0.5s;
          }
        }
      }
      &:hover {
        ${StyledPostThumbnail} {
          a {
            img {
              transform: scale(1.1);
            }
          }
        }
      }
    `}
`;

export { StyledContentBlock };
