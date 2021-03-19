import React, { ReactChild } from "react";
import {
  Item,
  MegaMenuWrapper,
  SubMenu,
  VerticalNav,
  VerticalNavItem,
  VerticalNavMenu,
} from "./index.style";
import HoverFlip from "../../../../HoverFlip";

export interface MegaMenuProps {
  children?: ReactChild[];
}

const MegaMenu = ({ children }: MegaMenuProps) => {
  return (
    <MegaMenuWrapper>
      <SubMenu>
        <Item>
          <VerticalNav>
            <VerticalNavMenu>
              <VerticalNavItem active={true}>
                <HoverFlip to={"/"}>Test</HoverFlip>
              </VerticalNavItem>
            </VerticalNavMenu>
          </VerticalNav>
        </Item>
      </SubMenu>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
