import styled from "styled-components";
import { StyledLogo } from "../Header/Logo/index.style";
import { Link } from "gatsby";

export interface StyledMobileMenuProps {
  show: boolean;
}

export interface MenuWithChildrenProps {
  open: boolean;
}

const Inner = styled.div`
  background: ${(props) => props.theme.colors.white} !important;
  position: relative !important;
  width: 320px !important;
  max-width: 80% !important;
  height: 100% !important;
  text-align: left !important;
  transition: all 0.3s !important;
  overflow-y: auto !important;
  transform: translateX(-100%) !important;
  cursor: default !important;
`;

const StyledMobileMenu = styled.div<StyledMobileMenuProps>`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.9) !important;
  visibility: hidden !important;
  opacity: 0 !important;
  cursor: url(../images/icons/light-close.png) 16 16, pointer !important;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  z-index: 99999 !important;

  ${(props) =>
    props.show &&
    `visibility: visible !important;
    opacity: 1 !important;
      ${Inner} {
        transform: none !important;
      }
    `}
`;

const MobileClose = styled.div`
  i {
    font-size: 22px;
    color: #000000;
    font-weight: 300;
  }
`;

const MobileMenuTop = styled.div`
  padding: 20px !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightest} !important;
  padding-bottom: 26px !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;

  ${StyledLogo} {
    a {
      display: block !important;
      img {
        max-height: 37px !important;
      }
    }
  }
`;

const MainMenu = styled.div`
  ${(props) => props.theme.extends.listStyle}
  padding: 5px 20px !important;
`;

const ItemLink = styled(Link)`
  font-size: 16px !important;
  display: block !important;
  line-height: 20px !important;
  color: #65676b !important;
  font-weight: 500 !important;
  &:hover {
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

const MenuItem = styled.li`
  margin: 0 !important;
  padding: 15px 0 !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightest} !important;
`;

const MenuItemWithChildren = styled(MenuItem)<MenuWithChildrenProps>`
  > a {
    position: relative !important;
    display: block !important;
    &::after {
      position: absolute !important;
      content: "\\f107" !important;
      font-family: ${(props) => props.theme.fonts.family.fontAwesome};
      right: 0 !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      ${(props) => props.theme.extends.transition}
    }
    &.open {
      color: ${(props) => props.theme.colors.primary} !important;
      &::after {
        content: "\\f106" !important;
      }
    }
  }
`;

const SubMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: none !important;
  padding-left: 20px !important;
  padding-top: 10px !important;
  li {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    a {
      padding: 8px 0 !important;
      display: block !important;
      font-size: 14px !important;
      line-height: 18px !important;
    }
  }
`;

export {
  StyledMobileMenu,
  Inner,
  MobileMenuTop,
  MobileClose,
  MainMenu,
  MenuItem,
  MenuItemWithChildren,
  ItemLink,
  SubMenu,
};
