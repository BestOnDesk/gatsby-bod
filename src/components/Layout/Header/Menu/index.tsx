import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { MenuCategory } from "../../../../app-types/category";
import {
  ItemLink,
  MainMenu,
  MenuItem,
  MenuNav,
  MenuWrapper,
} from "./index.style";
import MegaMenu from "./MegaMenu";
import { getLastPostsPreview } from "../../../../utils/post";

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

const Menu = () => (
  <StaticQuery
    query={menuQuery}
    render={(result: MenuQueryProps) => (
      <MenuWrapper>
        <MenuNav>
          <MainMenu>
            <MenuItem>
              <ItemLink to="/">Home</ItemLink>
            </MenuItem>
            {result.allWpCategory.nodes.map((category: MenuCategory, i) => {
              return (
                <MegaMenu category={modifySubCategory(category)} key={i} />
              );
            })}
            <MenuItem>
              <ItemLink to="/chi-siamo">Chi siamo</ItemLink>
            </MenuItem>
          </MainMenu>
        </MenuNav>
      </MenuWrapper>
    )}
  />
);

export const menuQuery = graphql`
  query menuQuery {
    allWpCategory(
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
            posts {
              nodes {
                date
                slug
                title
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 200, height: 130)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Menu;
