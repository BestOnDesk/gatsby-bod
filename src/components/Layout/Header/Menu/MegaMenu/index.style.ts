import styled from "styled-components";
import { MenuItem } from "../index.style";
import {
  HoverFlipItem,
  HoverFlipItemWrapper,
  HoverFlipSpan,
} from "../../../../HoverFlip/index.style";

export interface VerticalNavItemProps {
  active: boolean;
}

const MegaMenuWrapper = styled(MenuItem)`
  position: static;

  &:hover {
    .megamenu-sub-menu {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const SubMenu = styled.ul`
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

const Item = styled.li`
  display: flex;
  margin: 0;
`;

const VerticalNav = styled.div`
  min-width: 279px;
  width: auto;
  border-right: 1px solid #ced0d4;
  padding: 30px;
  ${(props) => props.theme.extends.listStyle}
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

  ${HoverFlipItemWrapper} {
    color: ${(props) => props.theme.colors.midgray};
    font-size: 16px;
    line-break: 20px;
    display: block;

    ${HoverFlipItem},
    ${HoverFlipSpan} {
      &:before {
        color: ${(props) => props.theme.colors.midgray};
      }
      &:after {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  // TODO .active part
`;

export {
  MegaMenuWrapper,
  SubMenu,
  Item,
  VerticalNav,
  VerticalNavMenu,
  VerticalNavItem,
};
