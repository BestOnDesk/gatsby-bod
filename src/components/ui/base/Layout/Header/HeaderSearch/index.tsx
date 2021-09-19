import React from "react";
import {
  HamburgerIcon,
  HamburgerInner,
  HamburgerMenu,
  HeaderSearch as HeaderSearchDiv,
  HeaderSearchForm,
  MetabarBlock,
  MobileSearchIcon,
} from "./index.style";
import SearchAutocomplete from "../../../Search/SearchAutocomplete";
import { Link } from "gatsby";

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
      <MetabarBlock>
        <MobileSearchIcon>
          <Link to={"/search/"}>
            <i className={"fal fa-search"} />
          </Link>
        </MobileSearchIcon>
      </MetabarBlock>
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
