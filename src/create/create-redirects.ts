import { Actions, CreatePagesArgs } from "gatsby";

import redirectsContent from "./redirects.json";

const isEnvDevelopment = process.env.NODE_ENV === "development";

export interface CreateRedirectsQueryResult {
  wp: {
    redirection: {
      redirects: {
        code: number;
        origin: string;
        target: string;
      }[];
    };
  };
}

export interface Redirect {
  fromPath: string;
  toPath: string;
  isPermanent: boolean;
}

const addSlashStartEnd = (url: string): string => {
  let finalUrl = url;

  if (!finalUrl.startsWith("/")) {
    finalUrl = "/" + finalUrl;
  }

  if (!finalUrl.endsWith("/")) {
    finalUrl = finalUrl + "/";
  }

  return finalUrl;
};

export const createRedirects = async (
  actions: Actions,
  graphql: CreatePagesArgs["graphql"]
): Promise<void> => {
  const redirects = redirectsContent as unknown as Redirect[];

  const result = await graphql<CreateRedirectsQueryResult>(`
    query {
      wp(redirection: { redirects: { elemMatch: { type: { eq: "url" } } } }) {
        redirection {
          redirects {
            code
            origin
            target
          }
        }
      }
    }
  `);

  result.data &&
    result.data.wp.redirection.redirects.forEach((redirect) => {
      actions.createRedirect({
        fromPath: addSlashStartEnd(redirect.origin),
        toPath: addSlashStartEnd(redirect.target),
        isPermanent: redirect.code === 301,
        statusCode: redirect.code,
        redirectInBrowser: isEnvDevelopment,
      });
    });

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
