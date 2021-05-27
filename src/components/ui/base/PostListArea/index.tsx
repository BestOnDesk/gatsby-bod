import React, { ReactChild } from "react";
import { StyledPostListArea } from "./index.style";

export interface PostListAreaProps {
  children: ReactChild | ReactChild[];
}

const PostListArea = ({ children }: PostListAreaProps) => {
  return <StyledPostListArea>{children}</StyledPostListArea>;
};

export default PostListArea;
