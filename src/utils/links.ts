import { AUTHOR_PATH, POST_PATH } from "../constants/paths";

const getCategoryLinkWithPage = (uri: string, page: number): string =>
  uri + page;

const getPostLink = (slug: string): string => `${POST_PATH}/${slug}`;

const getAuthorLink = (slug: string): string => `${AUTHOR_PATH}/${slug}`;

const getAuthorLinkWithPage = (slug: string, page: number): string =>
  `${AUTHOR_PATH}/${slug}/${page}`;

export {
  getPostLink,
  getAuthorLink,
  getCategoryLinkWithPage,
  getAuthorLinkWithPage,
};
