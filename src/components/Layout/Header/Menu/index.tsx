import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MenuCategory } from "../../../../app-types/category";
import {
  ItemLink,
  MainMenu,
  MenuItemWithChildren,
  MenuNav,
  MenuWrapper,
  SubMenu,
  SubMenuItem,
} from "./index.style";
import HoverFlip from "../../../HoverFlip";
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
            {result.allWpCategory.nodes.map((category: MenuCategory, i) => {
              return <MegaMenu categoryId={category.id} />;
            })}
            <MegaMenu />
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
        wpChildren {
          nodes {
            id
          }
        }
      }
    }
  }
`;

export default Menu;
