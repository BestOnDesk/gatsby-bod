import React, {
  FocusEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { Input, StyledSearchBox } from "./index.style";
import useDebounce from "../../../../../../hooks/use-debounce";
import { navigate } from "gatsby";

interface SearchBoxProps {
  focus: boolean;
  handleFocus: FocusEventHandler;
  handleClose: Function;
  refine: (...args: any[]) => any;
}

const SearchBox = (props: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchCharacters = useCallback(
    (searchTerm) => {
      props.refine(searchTerm);
    },
    [props.refine]
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCharacters(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, searchCharacters]);

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 27) {
      e.currentTarget.blur();
      props.handleClose();
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const searchParams = new URLSearchParams();
      searchParams.set("query", searchTerm);
      navigate("/search?" + searchParams.toString());
    }
  };

  const handleFocus = (e: any) => {
    inputRef.current?.focus();
  };

  return (
    <StyledSearchBox focus={props.focus}>
      <i className="fal fa-search" onClick={handleFocus} />
      <Input
        type="text"
        placeholder="Cerca"
        aria-label="Search"
        ref={inputRef}
        onFocus={props.handleFocus}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </StyledSearchBox>
  );
};

export default connectSearchBox(SearchBox);
