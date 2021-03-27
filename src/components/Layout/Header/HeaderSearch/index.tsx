import React from "react";
import {
  HeaderSearch as HeaderSearchDiv,
  HeaderSearchForm,
} from "./index.style";
import Search from "../../../Search";

const HeaderSearch = () => {
  return (
    <HeaderSearchDiv>
      <HeaderSearchForm>
        <Search />
      </HeaderSearchForm>
    </HeaderSearchDiv>
  );
};

export default HeaderSearch;
