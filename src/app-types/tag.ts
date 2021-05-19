import { graphql } from "gatsby";

export const TagPreviewFragment = graphql`
  fragment TagPreviewFragment on WpTag {
    name
    slug
  }
`;

export interface TagPreview {
  name: string;
  slug: string;
}
