import React from "react";
import {
  Search as SearchDiv,
  SearchButton,
  SearchIcon,
  SearchInput,
} from "./index.style";

const Search = () => {
  return (
    <SearchDiv className="form-group">
      <SearchButton type="submit">
        <SearchIcon />
        <i className="fal fa-search" />
      </SearchButton>
      <SearchInput type="text" placeholder="Search" />
    </SearchDiv>
  );
};

export default Search;
