import { Actions } from "gatsby";

import redirectsContent from "./redirects.json";

const isEnvDevelopment = process.env.NODE_ENV === "development";

export interface Redirect {
  fromPath: string;
  toPath: string;
  isPermanent: boolean;
}

export const createRedirects = async (actions: Actions): Promise<void> => {
  const redirects = (redirectsContent as unknown) as Redirect[];

  redirects.forEach((redirect) => {
    actions.createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      isPermanent: redirect.isPermanent,
      statusCode: redirect.isPermanent ? 301 : 302,
      redirectInBrowser: isEnvDevelopment,
    });
  });
};
