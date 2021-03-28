import styled from "styled-components";
import { Link } from "gatsby";
import { HoverFlipItemWrapper } from "../../../HoverFlip/index.style";

const MenuWrapper = styled.div``;

const MainMenu = styled.ul`
    ${(props) => props.theme.extends.listStyle}
    display: flex !important;w
    margin: 0 !important;
    padding: 0 !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    > li {
        margin: 0 18px !important;
        position: relative;
        @media ${(props) => props.theme.layouts.laptopDevice} {
            margin: 0 12px !important;
        }
        @media ${(props) => props.theme.layouts.lg} {
            margin: 0 12px !important;
        }
        > a {
            font-size: ${(props) => props.theme.fonts.size.b2} !important;
            line-height: ${(props) => props.theme.fonts.height.b2} !important;
            color: ${(props) => props.theme.colors.midgray} !important;
            font-weight: ${(props) =>
              props.theme.fonts.weight.pMedium} !important;
            ${(props) => props.theme.extends.transition}
            height: 80px !important;
            display: block !important;
            line-height: 80px !important;
            position: relative !important;
            &::after {
                position: absolute !important;
                bottom: 0 !important;
                width: 0 !important;
                height: 4px !important;
                background: ${(props) => props.theme.colors.primary} !important;
                content: "" !important;
                ${(props) => props.theme.extends.transition}
                left: 0 !important;
                border-radius: 10px 10px 0 0 !important;
            }

            &:hover {
                color: ${(props) => props.theme.colors.primary} !important;
            }
        }
        &:hover {
            > a {
                &::after {
                    width: 100% !important;
                }
            }
        }
`;

const MenuNav = styled.nav`
  ul {
    ${MainMenu} {
      justify-content: flex-start !important;
      li {
        &:first-child {
          margin-left: 0 !important;
        }
      }
    }
  }
`;

const ItemLink = styled(Link)``;

const SubMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  position: absolute !important;
  top: 100% !important;
  left: 0 !important;
  background: #ffffff !important;
  z-index: -1 !important;
  opacity: 0 !important;
  visibility: hidden !important;
  min-width: 240px !important;
  padding: 20px !important;
  border-radius: 0 0 10px 10px !important;
  box-shadow: ${(props) => props.theme.shadows.primary} !important;
  ${(props) => props.theme.extends.transitions}

  li {
    a {
      font-size: ${(props) => props.theme.fonts.size.b2} !important;
      line-height: ${(props) => props.theme.fonts.height.b2} !important;
      color: ${(props) => props.theme.colors.midgray} !important;
      font-weight: ${(props) => props.theme.fonts.weight.pMedium} !important;
      ${(props) => props.theme.extends.transitions}
    }

    ${HoverFlipItemWrapper} {
      span {
        &::before {
          color: ${(props) => props.theme.colors.midgray} !important;
        }

        &::after {
          color: ${(props) => props.theme.colors.primary} !important;
        }
      }
    }

    &:hover {
      > a {
        color: ${(props) => props.theme.colors.primary} !important;
      }
    }
  }
`;

const SubMenuItem = styled.li``;

const MenuItem = styled.li``;

const MenuItemWithChildren = styled(MenuItem)`
  &:hover {
    ${SubMenu} {
      opacity: 1 !important;
      visibility: visible !important;
      z-index: 9 !important;
    }
  }
`;

export {
  MenuWrapper,
  MenuNav,
  MainMenu,
  MenuItem,
  ItemLink,
  MenuItemWithChildren,
  SubMenu,
  SubMenuItem,
};
