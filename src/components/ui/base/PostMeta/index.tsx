import React from "react";
import {
  Content,
  PostAuthorAvatar,
  PostAuthorName,
  PostMetaDiv,
  PostMetaList,
  ReadMoreButton,
  SocialShareTransparent,
  StyledPostMeta,
} from "./index.style";
import { AuthorPreview } from "../../../../app-types/author";
import StaticImg from "../../../core/StaticImg";
import { getAuthorAvatarRelativePath } from "../../../../utils/author";
import HoverFlip from "../../../core/HoverFlip";
import { getAuthorLink, getPostLink } from "utils/links";
import { MAIN_URL } from "../../../../constants/paths";
import { SHARE_TEXT } from "../../../../constants/socials";
import HoverFlipLinkButton from "../../../core/HoverFlipLinkButton";
import {
  getTelegramUrlTextLink,
  getWhatsappTextLink,
} from "../../../../utils/social";

export interface PostMetaProps {
  withButton?: boolean;
  withShareButtons?: boolean;
  authorAvatarRounded?: boolean;
  date: string;
  author?: AuthorPreview;
  readingTime: string;
  postSlug: string;
  noMargin?: boolean;
}

const PostMeta = (props: PostMetaProps) => {
  return (
    <StyledPostMeta noMargin={props.noMargin}>
      <PostMetaDiv>
        {props.author && (
          <PostAuthorAvatar>
            <StaticImg
              alt={props.author.name}
              src={getAuthorAvatarRelativePath(props.author.slug)}
            />
          </PostAuthorAvatar>
        )}
        <Content>
          {props.author && (
            <PostAuthorName>
              <HoverFlip to={getAuthorLink(props.author.slug)}>
                {props.author.name}
              </HoverFlip>
            </PostAuthorName>
          )}
          <PostMetaList>
            <li>{props.date}</li>
            <li>{props.readingTime}</li>
          </PostMetaList>
        </Content>
      </PostMetaDiv>
      {props.withShareButtons && (
        <SocialShareTransparent
          whatsapp={getWhatsappTextLink(
            SHARE_TEXT + " - " + MAIN_URL + getPostLink(props.postSlug)
          )}
          telegram={getTelegramUrlTextLink(
            MAIN_URL + getPostLink(props.postSlug),
            SHARE_TEXT
          )}
          linkClipboard={MAIN_URL + getPostLink(props.postSlug)}
        />
      )}
      {props.withButton && (
        <ReadMoreButton>
          <HoverFlipLinkButton buttonRounded to={getPostLink(props.postSlug)}>
            Leggi ora
          </HoverFlipLinkButton>
        </ReadMoreButton>
      )}
    </StyledPostMeta>
  );
};

export default PostMeta;
