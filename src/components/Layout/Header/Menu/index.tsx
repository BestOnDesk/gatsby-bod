import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MenuCategory } from "../../../../app-types/category";
import {
  ItemLink,
  MainMenu,
  MenuItem,
  MenuNav,
  MenuWrapper,
} from "./index.style";
import MegaMenu from "./MegaMenu";

export interface MenuQueryProps {
  allWpCategory: {
    nodes: MenuCategory[];
  };
}

const Menu = () => (
  <StaticQuery
    query={menuQuery}
    render={(result: MenuQueryProps) => (
      <MenuWrapper>
        <MenuNav>
          <MainMenu>
            <MenuItem>
              <ItemLink to="/">Home</ItemLink>
            </MenuItem>
            {result.allWpCategory.nodes.map((category: MenuCategory, i) => {
              return <MegaMenu category={category} />;
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
      sort: { fields: name, order: DESC }
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
