import React from "react";
import { PostPreview } from "../../../../../../../../app-types/post";
import {
  ContentBlock as ContentBlockDiv,
  ContentBlockImgRounded,
  PostCat,
  PostCatList,
  PostContent,
  PostLink,
  PostThumbnail,
  Title,
} from "./index.style";
import {
  getCategoryLink,
  getPostLink,
} from "../../../../../../../../utils/links";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import HoverFlip from "../../../../../../../core/HoverFlip";

export interface ContentBlockProps {
  imgRounded?: boolean;
  post: PostPreview;
  categoryName: string;
  categorySlug: string;
}

const ContentBlock = (props: ContentBlockProps) => {
  const image = getImage(
    props.post.featuredImage.node.localFile.childImageSharp
  );
  return (
    <>
      {props.imgRounded ? (
        <ContentBlockImgRounded>
          <PostThumbnail style={{ marginBottom: "20px" }}>
            <PostLink to={getPostLink(props.post.slug)}>
              {image && (
                <GatsbyImage
                  alt={props.post.title}
                  image={image}
                  style={{ width: "100%" }}
                />
              )}
            </PostLink>
          </PostThumbnail>
          <PostContent>
            <PostCat>
              <PostCatList>
                <HoverFlip to={getCategoryLink(props.categorySlug)}>
                  {props.categoryName.toUpperCase()}
                </HoverFlip>
              </PostCatList>
            </PostCat>
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
