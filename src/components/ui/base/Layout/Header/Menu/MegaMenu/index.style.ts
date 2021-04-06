import styled from "styled-components";
import { HoverFlipItemWrapper } from "../../../../../../core/HoverFlip/index.style";
import { MenuItemWithChildren } from "../index.style";

export interface VerticalNavItemProps {
  active: boolean;
}

export interface VerticalInnerProps {
  active: boolean;
}

const MegaMenuSubMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  box-sizing: border-box !important;
  position: absolute !important;
  background: #fff !important;
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
  opacity: 0 !important;
  visibility: hidden !important;
  ${(props) => props.theme.extends.transition}
  min-width: 1230px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border-radius: 0 0 10px 10px !important;
  box-shadow: ${(props) => props.theme.shadows.primary} !important;
`;

const MegaMenuWrapper = styled(MenuItemWithChildren)`
  position: static !important;

  &:hover {
    ${MegaMenuSubMenu} {
      opacity: 1 !important;
      visibility: visible !important;
    }
  }
`;

const MegaMenuItem = styled.li`
  display: flex !important;
  margin: 0 !important;
`;

const VerticalNav = styled.div`
  min-width: 279px !important;
  width: auto !important;
  border-right: 1px solid #ced0d4 !important;
  ${(props) => props.theme.extends.listStyle}
  padding: 30px !important;
`;

const VerticalNavMenu = styled.ul``;

const VerticalNavItem = styled.li<VerticalNavItemProps>`
  margin: 10px 0 !important;

  &:first-child {
    margin-top: 0 !important;
  }
  &:last-child {
    margin-bottom: 0 !important;
  }

  a {
    color: ${(props) =>
      props.active
        ? props.theme.colors.primary
        : props.theme.colors.midgray} !important;
    font-size: 16px !important;
    line-break: 20px !important;
    display: block !important;
  }
  ${HoverFlipItemWrapper} {
    span::before {
      color: ${(props) =>
        props.active
          ? props.theme.colors.primary
          : props.theme.colors.midgray} !important;
    }
    span::after {
      color: ${(props) => props.theme.colors.primary} !important;
    }
  }

  &:first-child {
    margin-top: 0 !important;
  }
  &:last-child {
    margin-bottom: 0 !important;
  }
`;

const VerticalNavContent = styled.div`
  width: 83.589% !important;
  padding: 30px !important;
`;

const VerticalInner = styled.div<VerticalInnerProps>`
  display: ${(props) => (props.active ? `block` : `none`)} !important;
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
