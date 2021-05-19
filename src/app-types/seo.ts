/** OpenGraph docs: https://ogp.me/ */
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface OpenGraphObject {
  title?: string;
  description?: string;
  siteName?: string;
  image?: Image;
  type: OpenGraphTypeObject;
}

interface OpenGraphTypeAbstract {
  type: OpenGraphTypeEnum;
}

export interface OpenGraphTypeArticle extends OpenGraphTypeAbstract {
  /** Time values must be in ISO8601.
   * https://en.wikipedia.org/wiki/ISO_8601
   *
   * Format: yyy-mm-ddThh:mm:ss+hh:mm ||
   * e.g.: 2021-03-23T15:42:07+00:00
   *
   * published_time: When the article was first published.
   *
   * modified_time: When the article was last changed.
   *
   * expiration_time: When the article is out of date after.
   *
   * author: Writers of the article.
   *
   * section: A high-level section name. E.g. Technology
   *
   * tag: Tag words associated with this article.
   */
  published_time?: string;
  modified_time?: string;
  expiration_time?: string;
  author?: OpenGraphProfile;
  section?: string;
  tag?: string;
}

export interface OpenGraphTypeWebsite extends OpenGraphTypeAbstract {}

export interface OpenGraphProfile {
  first_name: string;
  last_name: string;
  username: string;
  gender: "male" | "female";
}

export enum OpenGraphProfileGender {
  Male = "male",
  Female = "female",
}

export enum OpenGraphTypeEnum {
  Website = "website",
  Article = "article",
}

export type OpenGraphTypeObject = OpenGraphTypeArticle | OpenGraphTypeWebsite;

export interface TwitterCard {
  title?: string;
  description?: string;
  image?: Image;
}

export interface Image {
  relativePath?: string; // Directly after images/  e.g. meta/customerly.jpg
  imageData?: IGatsbyImageData; // Absolute path after site url   e.g. /static/123/customerly.jpg
  alt: string;
}
