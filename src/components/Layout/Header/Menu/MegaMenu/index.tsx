import React from "react";
import {
  MegaMenuItem,
  MegaMenuSubMenu,
  MegaMenuWrapper,
  VerticalNav,
  VerticalNavItem,
  VerticalNavMenu,
} from "./index.style";
import HoverFlip from "../../../../HoverFlip";

// TODO Add props and graphql query

const MegaMenu = () => {
  return (
    <MegaMenuWrapper>
      <MegaMenuSubMenu>
        <MegaMenuItem>
          <VerticalNav>
            <VerticalNavMenu>
              <VerticalNavItem active={true}>
                <HoverFlip to={"/"}>Test</HoverFlip>
              </VerticalNavItem>
            </VerticalNavMenu>
          </VerticalNav>
        </MegaMenuItem>
      </MegaMenuSubMenu>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
