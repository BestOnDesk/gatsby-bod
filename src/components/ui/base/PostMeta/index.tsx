import React from "react";
import { StyledPostMeta } from "./index.style";
import { AuthorPreview } from "../../../../app-types/author";

export interface PostMetaProps {
  withButton?: boolean;
  authorAvatarRounded?: boolean;
  author: AuthorPreview;
}

const PostMeta = (props: PostMetaProps) => {
  return <StyledPostMeta></StyledPostMeta>;
};

export default PostMeta;
