import { OpenGraphTypeEnum, OpenGraphTypeObject } from "app-types/seo";
import { isISO8601 } from "utils/date";

export const getOpenGraphTypeMetas = (
  openGraphTypeObject?: OpenGraphTypeObject
): JSX.IntrinsicElements["meta"][] => {
  const metas: JSX.IntrinsicElements["meta"][] = [];

  if (openGraphTypeObject) {
    metas.push({
      property: "og:type",
      content: openGraphTypeObject.type,
    });

    switch (openGraphTypeObject.type) {
      case OpenGraphTypeEnum.Article:
        const openGraphTypeObjectArticle = openGraphTypeObject as {
          [string: string]: any;
        };
        Object.keys(openGraphTypeObjectArticle)
          .filter((key) => key !== "type" && key !== "profile")
          .forEach((key) => {
            if (key.endsWith("_time")) {
              if (!isISO8601(openGraphTypeObjectArticle[key])) {
                throw new Error(
                  openGraphTypeObjectArticle[key] +
                    " is not ISO8601 format in metas"
                );
              }
            }

            if (key !== "author") {
              metas.push({
                property: "og:article:" + key,
                content: openGraphTypeObjectArticle[key],
              });
            } else {
              Object.keys(openGraphTypeObjectArticle[key]).forEach(
                (profileKey: string) => {
                  metas.push({
                    property: "og:article:author:" + profileKey,
                    content: openGraphTypeObjectArticle[key][profileKey],
                  });
                }
              );
            }
          });
        break;
      case OpenGraphTypeEnum.Website:
        metas.push({
          property: "og:type",
          content: "website",
        });
        break;
      default:
        throw new Error("OpenGraphType does not exist");
    }
  } else {
    metas.push({
      property: "og:type",
      content: "website",
    });
  }

  return metas;
};
