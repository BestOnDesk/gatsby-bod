import { AUTHOR_PATH, CATEGORY_PATH, POST_PATH } from "../constants/paths";

const getCategoryLink = (slug: string): string => CATEGORY_PATH + "/" + slug;

const getCategoryLinkWithPage = (slug: string, page: number): string =>
  CATEGORY_PATH + "/" + slug + "/" + page;

const getPostLink = (slug: string): string => POST_PATH + "/" + slug;

const getAuthorLink = (slug: string): string => AUTHOR_PATH + "/" + slug;

export { getCategoryLink, getPostLink, getAuthorLink, getCategoryLinkWithPage };
