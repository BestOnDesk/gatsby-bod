import React from "react";
import { Search as SearchDiv, SearchButton, SearchInput } from "./index.style";

export interface SearchProps {
  className?: string;
}

const Search = (props: SearchProps) => {
  // TODO: Do search system
  return (
    <SearchDiv
      className={"form-group" + props.className ? ` ${props.className}` : ""}
    >
      <SearchButton type="submit">
        <i className="fal fa-search" />
      </SearchButton>
      <SearchInput type="text" placeholder="Cerca" />
    </SearchDiv>
  );
};

export default Search;
