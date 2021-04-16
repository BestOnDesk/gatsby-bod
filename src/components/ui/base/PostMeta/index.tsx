import React from "react";
import {
  Content,
  PostAuthorAvatar,
  PostAuthorName,
  PostMetaList,
  StyledPostMeta,
} from "./index.style";
import { AuthorPreview } from "../../../../app-types/author";
import StaticImg from "../../../core/StaticImg";
import { getAuthorAvatarRelativePath } from "../../../../utils/author";
import HoverFlip from "../../../core/HoverFlip";
import { getAuthorLink } from "utils/links";

export interface PostMetaProps {
  withButton?: boolean;
  authorAvatarRounded?: boolean;
  date: string;
  author: AuthorPreview;
  readingTime: string;
}

const PostMeta = (props: PostMetaProps) => {
  return (
    <StyledPostMeta>
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
    </StyledPostMeta>
  );
};

export default PostMeta;
