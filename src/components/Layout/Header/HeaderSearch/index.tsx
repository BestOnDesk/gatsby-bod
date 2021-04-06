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
import Search from "components/Search";
import { useDispatch } from "react-redux";
import { openMenu } from "../../../../state/actions/mobile";

const HeaderSearch = () => {
  const dispatch = useDispatch();
  return (
    <HeaderSearchDiv>
      <HeaderSearchForm>
        <Search />
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
          <HamburgerIcon onClick={() => dispatch(openMenu())}>
            <i className="fal fa-bars" />
          </HamburgerIcon>
        </HamburgerInner>
      </HamburgerMenu>
    </HeaderSearchDiv>
  );
};

export default HeaderSearch;
