import React from "react";
import {
  Content,
  PostAuthorAvatar,
  PostAuthorName,
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
  author: AuthorPreview;
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
      </Content>
    </StyledPostMeta>
  );
};

export default PostMeta;
