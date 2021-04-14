import { graphql } from "gatsby";

export const AuthorPreviewFragment = graphql`
  fragment AuthorPreviewFragment on WpUser {
    name
    slug
  }
`;

export interface AuthorPreview {
  name: string;
  slug: string;
}
