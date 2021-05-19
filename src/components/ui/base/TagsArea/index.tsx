import React from "react";
import { TagPreview } from "../../../../app-types/tag";
import { StyledTagsArea, TagLink } from "./index.style";

export interface TagsAreaProps {
  tags: TagPreview[];
  marginBottom?: number;
}

const TagsArea = (props: TagsAreaProps) => {
  return (
    <>
      {props.tags.length > 0 && (
        <StyledTagsArea marginBottom={props.marginBottom}>
          {props.tags.map((tag) => {
            return (
              <TagLink to={tag.slug} key={tag.slug}>
                {tag.name}
              </TagLink>
            );
          })}
        </StyledTagsArea>
      )}
    </>
  );
};

export default TagsArea;
