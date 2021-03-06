import React, { useState } from "react";
import {
  MegaMenuItem,
  MegaMenuSubMenu,
  MegaMenuWrapper,
  VerticalInner,
  VerticalNav,
  VerticalNavContent,
  VerticalNavItem,
  VerticalNavMenu,
  VerticalSingle,
} from "./index.style";
import HoverFlip from "../../../../../../core/HoverFlip";
import { Link } from "gatsby";
import { MenuCategory } from "../../../../../../../app-types/category";
import { Col, Row } from "styled-bootstrap-grid";
import ContentBlock from "./ContentBlock";

export interface MegaMenuProps {
  category: MenuCategory;
}

const MegaMenu = ({ category }: MegaMenuProps) => {
  const [active, setActive] = useState<number>(0);

  return (
    <MegaMenuWrapper>
      <Link to={category.uri}>{category.name}</Link>
      <MegaMenuSubMenu>
        <MegaMenuItem>
          <VerticalNav>
            <VerticalNavMenu>
              {category.wpChildren.nodes.map((subCategory, i) => {
                return (
                  <VerticalNavItem
                    active={i === active}
                    onMouseEnter={() => setActive(i)}
                    key={i}
                  >
                    <HoverFlip to={subCategory.uri}>
                      {subCategory.name}
                    </HoverFlip>
                  </VerticalNavItem>
                );
              })}
            </VerticalNavMenu>
          </VerticalNav>
          <VerticalNavContent>
            {category.wpChildren.nodes.map((subCategory, i) => {
              return (
                <VerticalInner active={active === i} key={i}>
                  <VerticalSingle>
                    <Row>
                      {subCategory.posts.nodes.map((post, i) => {
                        return (
                          <Col lg={3} key={i}>
                            <ContentBlock
                              imgRounded={true}
                              post={post}
                              categoryUri={subCategory.uri}
                              categoryName={subCategory.name}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </VerticalSingle>
                </VerticalInner>
              );
            })}
          </VerticalNavContent>
        </MegaMenuItem>
      </MegaMenuSubMenu>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
