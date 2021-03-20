import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MainCategory } from "../../../../app-types/category";
import {
  ItemLink,
  MainMenu,
  MenuItem,
  MenuItemWithChildren,
  MenuNav,
  MenuWrapper,
  SubMenu,
  SubMenuItem,
} from "./index.style";
import { getCategoryLink } from "../../../../utils/links";
import HoverFlip from "../../../HoverFlip";

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
            <MenuItemWithChildren>
              <ItemLink to="/">Home</ItemLink>
              <SubMenu>
                <SubMenuItem>
                  <HoverFlip to={"/"}>Test</HoverFlip>
                </SubMenuItem>
                <SubMenuItem>
                  <HoverFlip to={"/2"}>Test2</HoverFlip>
                </SubMenuItem>
              </SubMenu>
            </MenuItemWithChildren>
            {result.allWpCategory.nodes.map((category: MainCategory, i) => {
              return (
                <MenuItem>
                  <ItemLink to={getCategoryLink(category.slug)} key={i}>
                    {category.name}
                  </ItemLink>
                </MenuItem>
              );
            })}
            <MenuItem></MenuItem>
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
