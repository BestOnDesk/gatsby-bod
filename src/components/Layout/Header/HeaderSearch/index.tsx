import React from "react";
import {
  HamburgerIcon,
  HamburgerInner,
  HamburgerMenu,
  HeaderSearch as HeaderSearchDiv,
  HeaderSearchForm,
  MetabarBlock,
} from "./index.style";
import Search from "components/Search";

const HeaderSearch = () => {
  return (
    <HeaderSearchDiv>
      <HeaderSearchForm>
        <Search />
      </HeaderSearchForm>
      <MetabarBlock></MetabarBlock>
      <HamburgerMenu>
        <HamburgerInner>
          <HamburgerIcon>
            <i className="fal fa-bars" />
          </HamburgerIcon>
        </HamburgerInner>
      </HamburgerMenu>
    </HeaderSearchDiv>
  );
};

export default HeaderSearch;
