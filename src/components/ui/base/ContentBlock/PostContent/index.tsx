import React, { PropsWithChildren } from "react";
import { StyledPostContent } from "./index.style";

export interface PostContentProps {
  noPaddingTop?: boolean;
}

const PostContent = (props: PropsWithChildren<PostContentProps>) => {
  return (
    <StyledPostContent noPaddingTop={props.noPaddingTop}>
      {props.children}
    </StyledPostContent>
  );
};

export default PostContent;
