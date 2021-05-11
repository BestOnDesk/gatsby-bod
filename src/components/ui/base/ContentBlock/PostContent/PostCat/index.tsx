import React from "react";
import { PostCatList, StyledPostCat } from "./index.style";
import HoverFlip from "../../../../../core/HoverFlip";
import { getCategoryLink } from "../../../../../../utils/links";

export interface PostCatCategory {
  slug: string;
  name: string;
}

export interface PostCatProps {
  categories: PostCatCategory[];
}

const PostCat = (props: PostCatProps) => {
  return (
    <StyledPostCat>
      <PostCatList>
        {props.categories.map((category) => (
          <HoverFlip to={getCategoryLink(category.slug)} key={category.slug}>
            {category.name}
          </HoverFlip>
        ))}
      </PostCatList>
    </StyledPostCat>
  );
};

export default PostCat;
