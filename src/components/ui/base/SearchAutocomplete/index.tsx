import React, { useEffect, useState } from "react";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import {
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_SEARCH_KEY,
  SEARCH_DISTINCT_LIMIT,
} from "../../../../constants/algolia";
import { Close, Overlay, StyledSearchAutocomplete } from "./index.style";
import SearchBox from "./SearchBox";
import Results from "./Results";

const SearchAutocomplete = () => {
  const [focus, setFocus] = useState<boolean>(false);

  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

  const searchClient = {
    search(requests: any[]) {
      const shouldSearch = requests.some(
        ({ params: { query } }) => query !== ""
      );
      if (focus && shouldSearch) {
        return algoliaClient.search(requests);
      }
      return Promise.resolve({
        results: [{ hits: [] }],
      });
    },
  };
  const handleClose = () => setFocus(false);
  const handleFocus = () => !focus && setFocus(true);

  useEffect(() => {
    focus && handleClose();
  }, []);

  return (
    <StyledSearchAutocomplete focus={focus}>
      <InstantSearch indexName={ALGOLIA_INDEX_NAME} searchClient={searchClient}>
        <Configure distinct={SEARCH_DISTINCT_LIMIT} />
        <SearchBox
          focus={focus}
          handleFocus={handleFocus}
          handleClose={handleClose}
        />
        {focus && <Results />}
      </InstantSearch>
      {focus && (
        <>
          <Close onClick={handleClose}>
            <i className="fa fa-times" />
          </Close>
          <Overlay onClick={handleClose} />
        </>
      )}
    </StyledSearchAutocomplete>
  );
};

export default SearchAutocomplete;
