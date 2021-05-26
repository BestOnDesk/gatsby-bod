import React from "react";
import { PostCatList, StyledPostCat } from "./index.style";
import HoverFlip from "../../../../../core/HoverFlip";

export interface PostCatCategory {
  uri: string;
  name: string;
}

export interface PostCatProps {
  categories: PostCatCategory[];
}

const PostCat = (props: PostCatProps) => {
  return (
    <StyledPostCat>
      <PostCatList>
        {props.categories.map((category, i) => (
          <HoverFlip to={category.uri} key={category.uri}>
            {category.name +
              (props.categories.length > 1
                ? i < props.categories.length - 1
                  ? ","
                  : ""
                : "")}
          </HoverFlip>
        ))}
      </PostCatList>
    </StyledPostCat>
  );
};

export default PostCat;
