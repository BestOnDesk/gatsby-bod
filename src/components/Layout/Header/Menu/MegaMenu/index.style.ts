import styled from "styled-components";
import { HoverFlipItemWrapper } from "../../../../HoverFlip/index.style";
import { MenuItemWithChildren } from "../index.style";

export interface VerticalNavItemProps {
  active: boolean;
}

export interface VerticalInnerProps {
  active: boolean;
}

const MegaMenuSubMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  box-sizing: border-box;
  position: absolute;
  background: #fff;
  width: 100%;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  ${(props) => props.theme.extends.transition}
  min-width: 1230px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 10px 10px;
  box-shadow: ${(props) => props.theme.shadows.primary};
`;

const MegaMenuWrapper = styled(MenuItemWithChildren)`
  position: static !important;

  &:hover {
    ${MegaMenuSubMenu} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MegaMenuItem = styled.li`
  display: flex;
  margin: 0;
`;

const VerticalNav = styled.div`
  min-width: 279px;
  width: auto;
  border-right: 1px solid #ced0d4;
  ${(props) => props.theme.extends.listStyle}
  padding: 30px;
`;

const VerticalNavMenu = styled.ul``;

const VerticalNavItem = styled.li<VerticalNavItemProps>`
  margin: 10px 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: ${(props) =>
      props.active ? props.theme.colors.primary : props.theme.colors.midgray};
    font-size: 16px;
    line-break: 20px;
    display: block;
  }
  ${HoverFlipItemWrapper} {
    span::before {
      color: ${(props) =>
        props.active ? props.theme.colors.primary : props.theme.colors.midgray};
    }
    span::after {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const VerticalNavContent = styled.div`
  width: 83.589%;
  padding: 30px;
`;

const VerticalInner = styled.div<VerticalInnerProps>`
  display: ${(props) => (props.active ? `block` : `none`)};
`;

const VerticalSingle = styled.div``;

export {
  MegaMenuWrapper,
  MegaMenuSubMenu,
  MegaMenuItem,
  VerticalNav,
  VerticalNavMenu,
  VerticalNavItem,
  VerticalNavContent,
  VerticalInner,
  VerticalSingle,
};
