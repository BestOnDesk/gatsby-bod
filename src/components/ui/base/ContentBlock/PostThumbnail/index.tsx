import React from "react";
import { StyledPostThumbnail } from "./index.style";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

export interface PostThumbnailProps {
  image: IGatsbyImageData;
  alt: string;
  link: string;
}

const PostThumbnail = (props: PostThumbnailProps) => {
  return (
    <StyledPostThumbnail>
      <Link to={props.link}>
        <GatsbyImage image={props.image} alt={props.alt} />
      </Link>
    </StyledPostThumbnail>
  );
};

export default PostThumbnail;
