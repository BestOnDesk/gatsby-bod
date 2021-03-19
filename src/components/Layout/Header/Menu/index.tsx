import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MainCategory } from "../../../../app-types/category";
import { ItemLink, MainMenu, MenuNav, MenuWrapper } from "./index.style";
import { getCategoryLink } from "../../../../utils/links";

export interface MenuQueryProps {
  allWpCategory: {
    nodes: MainCategory[];
  };
}

const Menu = () => (
  <StaticQuery
    query={menuQuery}
    render={(result: MenuQueryProps) => (
      <MenuWrapper>
        <MenuNav>
          <MainMenu>
            <ItemLink to="/">Home</ItemLink>
            {result.allWpCategory.nodes.map((category: MainCategory, i) => {
              return (
                <ItemLink to={getCategoryLink(category.slug)} key={i}>
                  {category.name}
                </ItemLink>
              );
            })}
          </MainMenu>
        </MenuNav>
      </MenuWrapper>
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
