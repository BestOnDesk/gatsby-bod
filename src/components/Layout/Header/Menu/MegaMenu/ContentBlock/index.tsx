import React from "react";
import { PostPreview } from "../../../../../../app-types/post";
import {
  ContentBlock as ContentBlockDiv,
  ContentBlockImgRounded,
  PostCat,
  PostContent,
  PostLink,
  PostThumbnail,
  Title,
} from "./index.style";
import { getPostLink } from "../../../../../../utils/links";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export interface ContentBlockProps {
  imgRounded?: boolean;
  post: PostPreview;
}

const ContentBlock = (props: ContentBlockProps) => {
  return (
    <>
      {props.imgRounded ? (
        <ContentBlockImgRounded>
          <PostThumbnail style={{ marginBottom: "20px" }}>
            <PostLink to={getPostLink(props.post.slug)}>
              <GatsbyImage
                alt={props.post.title}
                image={props.post.featuredImage.node.localFile.childImageSharp}
                style={{ width: "100%" }}
                imgStyle={{ width: "100%" }}
              />
            </PostLink>
          </PostThumbnail>
          <PostContent>
            <PostCat></PostCat>
            <Title>
              <Link to={getPostLink(props.post.slug)}>{props.post.title}</Link>
            </Title>
          </PostContent>
        </ContentBlockImgRounded>
      ) : (
        <ContentBlockDiv></ContentBlockDiv>
      )}
    </>
  );
};

export default ContentBlock;
