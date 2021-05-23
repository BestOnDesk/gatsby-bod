import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import { IGatsbyImageData } from "gatsby-plugin-image";

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
    parentCategorySlug: string;
    category: {
      nodes: {
        slug: string;
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
          }[];
        };
        wpChildren: {
          nodes: {
            slug: string;
            name: string;
          }[];
        };
      }[];
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
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }[];
  };
}

const CategoryTemplate = ({ pageContext }: CategoryTemplateProps) => {
  console.log(pageContext);

  return (
    <GlobalWrapper withLayout headerWithShadow>
      <SEO title={"test"} description={"test"} />
      <div>{pageContext.parentCategorySlug}</div>
    </GlobalWrapper>
  );
};

export default CategoryTemplate;
