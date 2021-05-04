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
import HoverFlipLinkButton from "../../../core/HoverFlipMagnetLinkButton";

export interface PostMetaProps {
  withButton?: boolean;
  authorAvatarRounded?: boolean;
  date: string;
  author: AuthorPreview;
  readingTime: string;
  postSlug: string;
}

const PostMeta = (props: PostMetaProps) => {
  return (
    <StyledPostMeta>
      <PostMetaDiv>
        <PostAuthorAvatar>
          <StaticImg
            alt={props.author.name}
            src={getAuthorAvatarRelativePath(props.author.slug)}
          />
        </PostAuthorAvatar>
        <Content>
          <PostAuthorName>
            <HoverFlip to={getAuthorLink(props.author.slug)}>
              {props.author.name}
            </HoverFlip>
          </PostAuthorName>
          <PostMetaList>
            <li>{props.date}</li>
            <li>{props.readingTime}</li>
          </PostMetaList>
        </Content>
      </PostMetaDiv>
      <SocialShareTransparent
        whatsapp={SHARE_TEXT + " - " + MAIN_URL + getPostLink(props.postSlug)}
        telegram={{
          text: SHARE_TEXT,
          url: MAIN_URL + getPostLink(props.postSlug),
        }}
        linkClipboard={MAIN_URL + getPostLink(props.postSlug)}
      />
      <ReadMoreButton>
        <HoverFlipLinkButton rounded to={getPostLink(props.postSlug)}>
          Leggi ora
        </HoverFlipLinkButton>
      </ReadMoreButton>
    </StyledPostMeta>
  );
};

export default PostMeta;
