import React from "react";
import Logo from "../Header/Logo";
import {
  Inner,
  ItemLink,
  MainMenu,
  MenuItem,
  MenuItemWithChildren,
  MobileClose,
  MobileMenuTop,
  StyledMobileMenu,
  SubMenu,
} from "./index.style";

export interface MobileMenuProps {
  show: boolean;
}

const MobileMenu = (props: MobileMenuProps) => {
  return (
    <StyledMobileMenu show={props.show}>
      <Inner>
        <MobileMenuTop>
          <Logo />
          <MobileClose>
            <i className="fal fa-times" />
          </MobileClose>
        </MobileMenuTop>
        <MainMenu>
          <MenuItem>
            <ItemLink to="/">Home</ItemLink>
          </MenuItem>
          <MenuItemWithChildren>
            <ItemLink to="/">Home</ItemLink>
            <SubMenu>
              <ItemLink to="/">Home</ItemLink>
              <ItemLink to="/">Home</ItemLink>
            </SubMenu>
          </MenuItemWithChildren>
          <MenuItem>
            <ItemLink to="/chi-siamo">Chi siamo</ItemLink>
          </MenuItem>
        </MainMenu>
      </Inner>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
