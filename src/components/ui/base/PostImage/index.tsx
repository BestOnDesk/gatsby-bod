import React from "react";
import { StyledPostImage } from "./index.style";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface PostImageProps {
  alt: string;
  image: IGatsbyImageData;
}

const PostImage = (props: PostImageProps) => {
  return <StyledPostImage {...props} />;
};

export default PostImage;
