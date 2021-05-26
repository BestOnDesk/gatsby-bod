import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import { IGatsbyImageData } from "gatsby-plugin-image";
import BreadcrumbArea from "../components/ui/base/BreadcrumbArea";

export interface CategoryTemplateProps {
  pageContext: {
    pagination: {
      limit: number;
      skip: number;
      numberOfPages: number;
      currentPage: number;
      newerPath: string;
      olderPath: string;
    };
    parentCategory?: {
      name: string;
      slug: string;
      uri: string;
    };
    category: {
      uri: string;
      name: string;
      posts: {
        nodes: {
          slug: string;
          title: string;
          content: string;
          date: string;
          author: {
            node: {
              name: string;
              slug: string;
            };
          };
          featuredImage: {
            node: {
              localFile: {
                childImageSharp: {
                  gatsbyImageData: IGatsbyImageData;
                };
              };
            };
          };
        }[];
      };
      wpChildren: {
        nodes: {
          slug: string;
          name: string;
        }[];
      };
    };
    posts: {
      slug: string;
      title: string;
      content: string;
      date: string;
      author: {
        node: {
          name: string;
          slug: string;
        };
      };
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    }[];
  };
}

const CategoryTemplate = ({ pageContext }: CategoryTemplateProps) => {
  return (
    <GlobalWrapper withLayout headerWithShadow>
      <SEO title={"test"} description={"test"} />
      <BreadcrumbArea
        title={pageContext.category.name}
        breadcrumbs={[
          { name: "BestOnDesk", link: "/" },
          ...(pageContext.parentCategory?.slug
            ? [
                {
                  name: pageContext.parentCategory.name,
                  link: pageContext.parentCategory.uri,
                },
              ]
            : []),
          {
            name: pageContext.category.name,
            link: pageContext.category.uri,
          },
        ]}
      />
    </GlobalWrapper>
  );
};

export default CategoryTemplate;
