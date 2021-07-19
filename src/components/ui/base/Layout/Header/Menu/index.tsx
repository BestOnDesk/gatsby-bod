import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MenuCategory } from "app-types/category";
import {
  ItemLink,
  MainMenu,
  MenuItem,
  MenuNav,
  MenuWrapper,
} from "./index.style";
import MegaMenu from "./MegaMenu";
import { getLastPostsPreview } from "utils/post";

export interface MenuQueryProps {
  allWpCategory: {
    nodes: MenuCategory[];
  };
}

const modifySubCategory = (category: MenuCategory): MenuCategory => {
  category.wpChildren.nodes.forEach((subCategory, i) => {
    category.wpChildren.nodes[i].posts.nodes = getLastPostsPreview(
      category.wpChildren.nodes[i].posts.nodes,
      4
    );
  });
  return category;
};

const Menu = () => {
  const { allWpCategory }: MenuQueryProps = useStaticQuery(graphql`
    query {
      allWpCategory(
        sort: { fields: name, order: DESC }
        filter: {
          slug: { ne: "uncategorized-en" }
          wpChildren: { nodes: { elemMatch: { count: { gt: 0 } } } }
        }
      ) {
        nodes {
          ...MenuCategoryFragment
        }
      }
    }
  `);

  return (
    <MenuWrapper>
      <MenuNav>
        <MainMenu>
          <MenuItem>
            <ItemLink to="/">Home</ItemLink>
          </MenuItem>
          {allWpCategory.nodes.map((category: MenuCategory, i) => {
            return <MegaMenu category={modifySubCategory(category)} key={i} />;
          })}
          <MenuItem>
            <ItemLink to="/chi-siamo/">Chi siamo</ItemLink>
          </MenuItem>
        </MainMenu>
      </MenuNav>
    </MenuWrapper>
  );
};

export default Menu;
