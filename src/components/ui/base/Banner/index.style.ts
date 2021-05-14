import styled from "styled-components";
import { StyledContentBlock } from "../ContentBlock/index.style";
import { StyledPostContent } from "../ContentBlock/PostContent/index.style";
import { StyledPostThumbnail } from "../ContentBlock/PostThumbnail/index.style";
import { StyledTitle } from "../../../core/Title/index.style";
import { BannerProps } from "./index";
import { StyledPostCat } from "../ContentBlock/PostContent/PostCat/index.style";
import {
  PostMetaDiv,
  SocialShareTransparent,
  StyledPostMeta,
} from "../PostMeta/index.style";

const StyledBanner = styled.div<BannerProps>`
  padding-bottom: 40px;
  @media ${(props) => props.theme.layouts.md} {
    padding-bottom: 30px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding-bottom: 30px;
  }

  ${StyledContentBlock} {
    ${StyledPostThumbnail} {
      img {
        border-radius: 0 0 10px 10px;
      }
    }

    ${StyledPostContent} {
      padding-top: 80px;

      ${StyledTitle} {
        @media ${(props) => props.theme.layouts.sm} {
          font-size: 25px;
        }

        @media ${(props) => props.theme.layouts.largeMobile} {
          font-size: 23px;
          padding-right: 0;
          line-height: 32px;
        }
      }

      ${StyledPostCat} {
        margin-bottom: 20px;

        @media ${(props) => props.theme.layouts.largeMobile} {
          margin-bottom: 10px;
        }
      }

      ${StyledPostMeta} {
        margin-top: 40px;
        border-bottom: 1px solid ${(props) => props.theme.colors.lighter};

        @media ${(props) => props.theme.layouts.sm} {
          margin-top: 22px;
        }

        @media ${(props) => props.theme.layouts.largeMobile} {
          margin-top: 10px;
        }

        ${PostMetaDiv} {
          padding-bottom: 20px;

          @media ${(props) => props.theme.layouts.sm} {
            padding-bottom: 15px;
          }
        }

        ${SocialShareTransparent} {
          margin-right: 0;
          padding-bottom: 20px;

          @media ${(props) => props.theme.layouts.sm} {
            padding-bottom: 15px;
          }
        }
      }
    }
  }
`;

export { StyledBanner };
