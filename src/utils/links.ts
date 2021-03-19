import { CATEGORY_PATH } from "../constants";

const getCategoryLink = (slug: string): string => CATEGORY_PATH + "/" + slug;

export { getCategoryLink };
