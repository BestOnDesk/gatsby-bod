import React from "react";
import {
  HamburgerIcon,
  HamburgerInner,
  HamburgerMenu,
  HeaderSearch as HeaderSearchDiv,
  HeaderSearchForm,
  MetabarBlock,
  MetabarIcon,
} from "./index.style";
import SearchAutocomplete from "../../../SearchAutocomplete";

const HeaderSearch = () => {
  return (
    <HeaderSearchDiv>
      <HeaderSearchForm>
        <SearchAutocomplete />
      </HeaderSearchForm>
      <MetabarBlock>
        <MetabarIcon>
          <a href="#">
            <i className="fab fa-telegram-plane" />
          </a>
        </MetabarIcon>
      </MetabarBlock>
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
