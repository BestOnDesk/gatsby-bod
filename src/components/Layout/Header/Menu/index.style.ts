import styled from "styled-components";
import { Link } from "gatsby";
import { HoverFlipItemWrapper } from "../../../HoverFlip/index.style";

const MenuWrapper = styled.div``;

const MainMenu = styled.ul`
    ${(props) => props.theme.extends.listStyle}
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    > li {
        margin: 0 18px;
        position: relative;
        @media ${(props) => props.theme.layouts.laptopDevice} {
            margin: 0 12px;
        }
        @media ${(props) => props.theme.layouts.lg} {
            margin: 0 12px;
        }
        > a {
            font-size: ${(props) => props.theme.fonts.size.b2};
            line-height: ${(props) => props.theme.fonts.height.b2};
            color: ${(props) => props.theme.colors.midgray};
            font-weight: ${(props) => props.theme.fonts.weight.pMedium};
            ${(props) => props.theme.extends.transition}
            height: 80px;
            display: block;
            line-height: 80px;
            position: relative;
            &::after {
                position: absolute;
                bottom: 0;
                width: 0;
                height: 4px;
                background: ${(props) => props.theme.colors.primary};
                content: "";
                ${(props) => props.theme.extends.transition}
                left: 0;
                border-radius: 10px 10px 0 0;
            }

            &:hover {
                color: ${(props) => props.theme.colors.primary};
            }
        }
        &:hover {
            > a {
                &::after {
                    width: 100%;
                }
            }
        }
`;

const MenuNav = styled.nav`
  ul {
    ${MainMenu} {
      justify-content: flex-start;
      li {
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;

const ItemLink = styled(Link)``;

const SubMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  min-width: 240px;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  box-shadow: ${(props) => props.theme.shadows.primary};
  ${(props) => props.theme.extends.transitions}

  li {
    a {
      font-size: ${(props) => props.theme.fonts.size.b2};
      line-height: ${(props) => props.theme.fonts.height.b2};
      color: ${(props) => props.theme.colors.midgray};
      font-weight: ${(props) => props.theme.fonts.weight.pMedium};
      ${(props) => props.theme.extends.transitions}
    }

    ${HoverFlipItemWrapper} {
      span {
        &::before {
          color: ${(props) => props.theme.colors.midgray};
        }

        &::after {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }

    &:hover {
      > a {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

const SubMenuItem = styled.li``;

const MenuItem = styled.li``;

const MenuItemWithChildren = styled(MenuItem)`
  &:hover {
    ${SubMenu} {
      opacity: 1;
      visibility: visible;
      z-index: 9;
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
