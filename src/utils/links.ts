import { AUTHOR_PATH, POST_PATH } from "../constants/paths";

const getCategoryLinkWithPage = (uri: string, page: number): string =>
  uri + page;

const getPostLink = (slug: string): string => POST_PATH + "/" + slug;

const getAuthorLink = (slug: string): string => AUTHOR_PATH + "/" + slug;

export { getPostLink, getAuthorLink, getCategoryLinkWithPage };
