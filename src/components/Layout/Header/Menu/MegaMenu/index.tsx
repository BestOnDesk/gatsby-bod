import React from "react";
import {
  MegaMenuItem,
  MegaMenuSubMenu,
  MegaMenuWrapper,
  VerticalNav,
  VerticalNavContent,
  VerticalNavItem,
  VerticalNavMenu,
} from "./index.style";
import HoverFlip from "../../../../HoverFlip";
import { Link } from "gatsby";
import { getCategoryLink } from "../../../../../utils/links";
import { MenuCategory } from "../../../../../app-types/category";

// TODO Add props and graphql query

export interface MegaMenuProps {
  category: MenuCategory;
}

const MegaMenu = ({ category }: MegaMenuProps) => {
  return (
    <MegaMenuWrapper>
      <Link to={getCategoryLink(category.slug)}>{category.name}</Link>
      <MegaMenuSubMenu>
        <MegaMenuItem>
          <VerticalNav>
            <VerticalNavMenu>
              {category.wpChildren.nodes.map((subCategory, i) => {
                return (
                  <VerticalNavItem active={i === 0}>
                    <HoverFlip to={getCategoryLink(subCategory.slug)}>
                      {subCategory.name}
                    </HoverFlip>
                  </VerticalNavItem>
                );
              })}
            </VerticalNavMenu>
            <VerticalNavContent>
              <VerticalInner>

              </VerticalInner>
            </VerticalNavContent>
          </VerticalNav>
        </MegaMenuItem>
      </MegaMenuSubMenu>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
