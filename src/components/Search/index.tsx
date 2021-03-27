import React from "react";
import { Search as SearchDiv, SearchButton, SearchInput } from "./index.style";

const Search = () => {
  return (
    <SearchDiv>
      <SearchButton type="submit">
        <i className="fa fa-search" />
      </SearchButton>
      <SearchInput type="text" placeholder="Search" />
    </SearchDiv>
  );
};

export default Search;
