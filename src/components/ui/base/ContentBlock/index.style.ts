import styled, { css } from "styled-components";
import { StyledPostThumbnail } from "./PostThumbnail/index.style";
import { ContentBlockProps } from "./index";
import { PostCatList, StyledPostCat } from "./PostContent/PostCat/index.style";
import { StyledPostContent } from "./PostContent/index.style";
import { StyledTitle } from "../../../core/Title/index.style";
import { StyledPostMeta } from "../PostMeta/index.style";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";
import { PostGridContent } from "../Tab/GridTabContent/index.style";

export interface StyledContentBlockProps {
  shape01?: string;
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
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}px !important;
    `}

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
    
    ${(props) =>
    props.postGrid &&
    css`
      position: relative;
      padding-bottom: 30px;

      ${StyledPostThumbnail} {
        a {
          img {
            ${(props) => props.theme.extends.radius}
            width: 100%;
            overflow: hidden;
            transition: 0.5s;
            @media ${(props) => props.theme.layouts.largeMobile} {
              border-radius: 10px 10px 0 0;
            }
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

      ${PostGridContent} {
        position: absolute;
        bottom: 0;
        width: auto;
        padding: 0 52px;
        z-index: 2;
        left: 0;
        right: 0;

        @media ${(props) => props.theme.layouts.lg} {
          padding: 0 25px;
        }
        @media ${(props) => props.theme.layouts.md} {
          padding: 0 25px;
        }
        @media ${(props) => props.theme.layouts.sm} {
          padding: 0 25px;
        }

        @media ${(props) => props.theme.layouts.largeMobile} {
          position: static;
          padding: 0;
        }
        ${StyledPostContent} {
          background: ${(props) => props.theme.colors.white};
          padding: 30px 32px;
          ${(props) => props.theme.extends.radius}
          @media ${(props) => props.theme.layouts.largeMobile} {
            border-radius: 0 0 10px 10px;
            padding: 30px 20px;
          }
          ${StyledTitle} {
            margin-bottom: 0;
            @media ${(props) => props.theme.layouts.sm} {
              line-height: 24px;
            }
          }
          h3${StyledTitle} {
            @media ${(props) => props.theme.layouts.sm} {
              font-size: 20px;
              line-height: 26px;
            }
          }
          ${StyledPostMeta} {
            margin-top: 30px;
          }
        }
      }

      ${props.postGridLarge &&
      css`
        ${PostGridContent} {
          padding: 0 65px;
          @media ${(props) => props.theme.layouts.lg} {
            padding: 0 25px;
          }
          @media ${(props) => props.theme.layouts.md} {
            padding: 0 25px;
          }
          @media ${(props) => props.theme.layouts.sm} {
            padding: 0 25px;
          }
          @media ${(props) => props.theme.layouts.largeMobile} {
            padding: 0;
          }
          ${StyledPostContent} {
            ${StyledPostCat} {
              margin-bottom: 20px;
            }
          }
        }
      `}

      ${props.postGridTransparent &&
      css`
        padding-bottom: 0;
        ${PostGridContent} {
          padding: 0 40px;
          padding-bottom: 40px;
          position: absolute;
          @media ${(props) => props.theme.layouts.sm} {
            padding: 0 20px;
            padding-bottom: 20px;
          }
          ${StyledPostContent} {
            background: transparent !important;
            padding: 0;
            ${StyledPostCat} {
              ${PostCatList} {
                a {
                  color: ${(props) => props.theme.colors.lightest};
                  ${(props) => props.theme.extends.transition}
                  ${HoverFlipItemWrapper} {
                    span {
                      &::before {
                        color: ${(props) => props.theme.colors.white};
                      }
                      &::after {
                        color: ${(props) => props.theme.colors.primary};
                      }
                    }
                  }
                  &:hover {
                    color: ${(props) => props.theme.colors.primary};
                  }
                }
              }
            }
            ${StyledTitle} {
              color: ${(props) => props.theme.colors.primary};
            }
          }
        }
      `}

      ${props.postGridSmall &&
      css`
        ${PostGridContent} {
          padding: 0 30px;
          padding-bottom: 20px;
          @media ${(props) => props.theme.layouts.md} {
            padding: 0 20px;
            padding-bottom: 20px;
          }
          @media ${(props) => props.theme.layouts.sm} {
            padding: 20px 20px;
          }
        }
      `}
    `}
    
    ${(props) =>
    props.postDefault &&
    css`
      ${StyledPostThumbnail} {
        overflow: hidden;
        border-radius: ${(props) => props.theme.borders.radius};
        a {
          img {
            transition: 0.5s;
          }
        }
      }
      ${StyledPostContent} {
        margin-top: 30px;
        ${StyledTitle} {
          margin-bottom: 0;
        }
        ${StyledPostMeta} {
          margin-top: 30px;
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
