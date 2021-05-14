import React, { ReactChild } from "react";
import { StyledPostSingleWrapper } from "./index.style";

export interface PostSingleWrapperProps {
  children: ReactChild | ReactChild[];
}

const PostSingleWrapper = (props: PostSingleWrapperProps) => {
  return <StyledPostSingleWrapper>{props.children}</StyledPostSingleWrapper>;
};

export default PostSingleWrapper;
