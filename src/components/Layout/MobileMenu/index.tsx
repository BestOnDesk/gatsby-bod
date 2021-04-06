import React, { useState } from "react";
import Logo from "../Header/Logo";
import {
  Inner,
  ItemLink,
  MainMenu,
  MenuItem,
  MenuItemWithChildren,
  MenuItemWithChildrenInner,
  MobileClose,
  MobileMenuTop,
  StyledMobileMenu,
  SubMenu,
} from "./index.style";
import { graphql, useStaticQuery } from "gatsby";
import { getCategoryLink } from "../../../utils/links";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../state/actions/mobile";

export interface MobileMenuProps {
  show: boolean;
}

export interface MobileMenuQueryProps {
  categories: {
    nodes: {
      slug: string;
      name: string;
      wpChildren: {
        nodes: {
          slug: string;
          name: string;
        }[];
      };
    }[];
  };
}

const MobileMenu = (props: MobileMenuProps) => {
  const dispatch = useDispatch();
  const [subMenuOpenIndex, setSubMenuOpenIndex] = useState<number>(-1);
  const { categories }: MobileMenuQueryProps = useStaticQuery(graphql`
    query {
      categories: allWpCategory(
        sort: { fields: name, order: DESC }
        filter: {
          slug: { ne: "uncategorized-en" }
          wpChildren: { nodes: { elemMatch: { count: { gt: 0 } } } }
        }
      ) {
        nodes {
          slug
          name
          wpChildren {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  `);

  const toggleSubMenuOpen = (index: number) => {
    if (subMenuOpenIndex !== index) setSubMenuOpenIndex(index);
    else setSubMenuOpenIndex(-1);
  };

  const close = () => dispatch(closeMenu());

  const preventDefault = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <StyledMobileMenu show={props.show} onClick={close}>
      <Inner onClick={preventDefault}>
        <MobileMenuTop>
          <Logo />
          <MobileClose onClick={close}>
            <i className="fal fa-times" />
          </MobileClose>
        </MobileMenuTop>
        <MainMenu>
          <MenuItem>
            <ItemLink to="/" onClick={close}>
              Home
            </ItemLink>
          </MenuItem>
          {categories.nodes.map((category, i) => {
            const open = i === subMenuOpenIndex;

            return (
              <MenuItemWithChildren key={i} open={open}>
                <MenuItemWithChildrenInner>
                  <ItemLink to={getCategoryLink(category.slug)} onClick={close}>
                    {category.name}
                  </ItemLink>
                  <i
                    className={open ? "fal fa-angle-up" : "fal fa-angle-down"}
                    onClick={() => toggleSubMenuOpen(i)}
                  />
                </MenuItemWithChildrenInner>
                <SubMenu open={open}>
                  {category.wpChildren.nodes.map((subcategory, i) => {
                    return (
                      <MenuItem key={i}>
                        <ItemLink
                          to={getCategoryLink(subcategory.slug)}
                          onClick={close}
                        >
                          {subcategory.name}
                        </ItemLink>
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              </MenuItemWithChildren>
            );
          })}
          <MenuItem>
            <ItemLink to="/chi-siamo" onClick={close}>
              Chi siamo
            </ItemLink>
          </MenuItem>
        </MainMenu>
      </Inner>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
