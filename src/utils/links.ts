import { CATEGORY_PATH, POST_PATH } from "../constants";

const getCategoryLink = (slug: string): string => CATEGORY_PATH + "/" + slug;

const getPostLink = (slug: string): string => POST_PATH + "/" + slug;

export { getCategoryLink, getPostLink };
