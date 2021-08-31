import React from "react";
import {
  HamburgerIcon,
  HamburgerInner,
  HamburgerMenu,
  HeaderSearch as HeaderSearchDiv,
  HeaderSearchForm,
  MetabarBlock,
} from "./index.style";
import SearchAutocomplete from "../../../SearchAutocomplete";

interface HeaderSearchProps {
  openMobileMenu: Function;
  withoutSearch?: boolean;
}

const HeaderSearch = (props: HeaderSearchProps) => {
  return (
    <HeaderSearchDiv>
      <HeaderSearchForm>
        {!props.withoutSearch && <SearchAutocomplete />}
      </HeaderSearchForm>
      <MetabarBlock></MetabarBlock>
      <HamburgerMenu>
        <HamburgerInner>
          <HamburgerIcon onClick={props.openMobileMenu}>
            <i className="fal fa-bars" />
          </HamburgerIcon>
        </HamburgerInner>
      </HamburgerMenu>
    </HeaderSearchDiv>
  );
};

export default HeaderSearch;
