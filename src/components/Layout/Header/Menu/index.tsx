import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MainCategory } from "../../../../app-types/category";

export interface MenuQueryProps {
  allWpCategory: {
    nodes: MainCategory[];
  };
}

const Menu = () => (
  <StaticQuery
    query={menuQuery}
    render={(result: MenuQueryProps) => (
      <>
        {result.allWpCategory.nodes.map((category: MainCategory, i) => {
          return <h2 key={i}>{category.name}</h2>;
        })}
      </>
    )}
  />
);

export const menuQuery = graphql`
  query menuQuery {
    allWpCategory(
      filter: {
        slug: { ne: "uncategorized-en" }
        wpChildren: { nodes: { elemMatch: { count: { gt: 0 } } } }
      }
    ) {
      nodes {
        id
        slug
        name
        wpChildren {
          nodes {
            id
            slug
            name
          }
        }
      }
    }
  }
`;

export default Menu;
