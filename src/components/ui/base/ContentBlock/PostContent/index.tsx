import React, { ReactChild } from "react";
import { StyledPostContent } from "./index.style";

export interface PostContentProps {
  children: ReactChild | ReactChild[];
}

const PostContent = (props: PostContentProps) => {
  return <StyledPostContent>{props.children}</StyledPostContent>;
};

export default PostContent;
