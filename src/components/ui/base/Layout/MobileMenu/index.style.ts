import styled from "styled-components";
import { StyledLogo } from "../Header/Logo/index.style";
import { Link } from "gatsby";

export interface StyledMobileMenuProps {
  show: boolean;
}

export interface MenuWithChildrenProps {
  open: boolean;
}

export interface SubMenuProps {
  open: boolean;
}

const Inner = styled.div`
  background: ${(props) => props.theme.colors.white};
  position: relative;
  width: 320px;
  max-width: 80%;
  height: 100%;
  text-align: left;
  transition: all 0.3s;
  overflow-y: auto;
  transform: translateX(-100%);
  cursor: default;
`;

const StyledMobileMenu = styled.div<StyledMobileMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  visibility: hidden;
  opacity: 0;
  cursor: url(../images/icons/light-close.png) 16 16, pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 99999;

  ${(props) =>
    props.show &&
    `visibility: visible;
    opacity: 1;
      ${Inner} {
        transform: none;
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
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightest};
  padding-bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${StyledLogo} {
    a {
      display: block;
      img {
        max-height: 37px;
      }
    }
  }
`;

const MainMenu = styled.div`
  ${(props) => props.theme.extends.listStyle}
  padding: 5px 20px;
`;

const ItemLink = styled(Link)`
  font-size: 16px;
  display: block;
  line-height: 20px;
  color: #65676b;
  font-weight: 500;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 15px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightest};
`;

const MenuItemWithChildren = styled(MenuItem)<MenuWithChildrenProps>`
  > div {
    > a {
      ${(props) =>
        props.open &&
        `
        color: ${props.theme.colors.primary};
      `}
    }

    > i {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      cursor: pointer;
    }
  }
`;

const MenuItemWithChildrenInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubMenu = styled.ul<SubMenuProps>`
  ${(props) => props.theme.extends.listStyle}
  display: none;
  padding-left: 20px;

  li {
    margin-top: 0;
    margin-bottom: 0;
    a {
      padding: 5px 0;
      display: block;
      font-size: 14px;
      line-height: 18px;
    }
  }

  li:last-child {
    border-bottom: 0;
    margin-bottom: -15px;
  }

  ${(props) =>
    props.open &&
    `
      display: block;
    `}
`;

export {
  StyledMobileMenu,
  Inner,
  MobileMenuTop,
  MobileClose,
  MainMenu,
  MenuItem,
  MenuItemWithChildren,
  MenuItemWithChildrenInner,
  ItemLink,
  SubMenu,
};
