import styled, { css } from "styled-components";
import { StyledPostThumbnail } from "./PostThumbnail/index.style";
import { ContentBlockProps } from "./index";
import { PostCatList } from "./PostContent/PostCat/index.style";
import { StyledPostContent } from "./PostContent/index.style";
import { StyledTitle } from "../../../core/Title/index.style";

export interface StyledContentBlockProps {
  shape01: string;
}

const StyledContentBlock = styled.div<
  ContentBlockProps & StyledContentBlockProps
>`
  &:hover {
    ${StyledPostContent} {
      a {
        background-size: 100% 2px;
      }
    }
  }

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
    props.textCenter &&
    css`
      text-align: center !important;
    `}

  ${(props) =>
    props.modernPostStyle &&
    css`
      border-radius: ${(props) => props.theme.borders.radius};
      background: ${(props) => props.theme.colors.lightest};
      padding: 50px 35px 0;
      overflow: hidden;
      height: 100%;
      display: flex !important;
      flex-direction: column;
      @media ${(props) => props.theme.layouts.md} {
        padding: 40px 20px 0;
      }

      ${props.textCenter &&
      css`
        ${PostCatList} {
          justify-content: center;
        }
      `}

      ${props.textRight &&
      css`
        ${PostCatList} {
          justify-content: flex-end;
        }
      `}

      ${StyledPostContent} {
        padding-bottom: 50px;
        flex: 1;
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

        a {
          &::before {
            content: "";
            background: url(${(props) => props.shape01});
            height: 77px;
            width: 100%;
            position: absolute;
            left: 0;
            top: -3px;
            z-index: 5;
            background-position: center center;
            background-size: cover;
          }
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
