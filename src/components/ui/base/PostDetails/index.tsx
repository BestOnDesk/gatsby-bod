import React from "react";
import { StyledPostDetails } from "./index.style";

export interface PostDetailsProps {
  content: string;
}

const PostDetails = ({ content }: PostDetailsProps) => {
  return (
    <StyledPostDetails
      dangerouslySetInnerHTML={{ __html: content }}
    ></StyledPostDetails>
  );
};

export default PostDetails;
