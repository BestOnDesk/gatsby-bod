import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import SearchArea from "../components/ui/base/Search/SearchArea";
import algoliasearch from "algoliasearch/lite";
import {
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_SEARCH_KEY,
  SEARCH_DISTINCT_LIMIT,
} from "../constants/algolia";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import SearchResults from "../components/ui/base/Search/SearchResults";
import { Col, Container, Row } from "styled-bootstrap-grid";
import WidgetPostList from "../components/ui/base/WidgetPostList";
import WidgetSocial from "../components/ui/base/WidgetSocial";
import PostListArea from "../components/ui/base/PostListArea";

interface SearchPageProps {
  location: Location;
}

export default ({ location }: SearchPageProps) => {
  const urlSearchParams = new URLSearchParams(location.search);
  const { query } = Object.fromEntries(urlSearchParams.entries());

  const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

  const searchClient = {
    search(requests: any[]) {
      const shouldSearch = requests.some(
        ({ params: { query } }) => query !== ""
      );
      if (shouldSearch) {
        return algoliaClient.search(requests);
      }
      return Promise.resolve({
        results: [{ hits: [] }],
      });
    },
  };

  const changeQueryString = (query: string) => {
    urlSearchParams.set("query", query);
    window.history.pushState(
      "",
      "",
      location.origin + location.pathname + "?" + urlSearchParams.toString()
    );
  };

  const handleSearch = (searchQuery: string) => {
    if (typeof window !== `undefined`) {
      changeQueryString(searchQuery);
    }
  };

  return (
    <GlobalWrapper withLayout withoutSearch>
      <SEO
        title={"Cerca articoli"}
        description={
          "BestOnDesk, finalmente il collega d’ufficio su cui puoi sempre contare in qualunque momento. Prodotti, consigli e molto altro."
        }
        location={location}
      />
      <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_NAME}>
        <Configure distinct={SEARCH_DISTINCT_LIMIT} />
        <SearchArea
          title={"Cerca"}
          value={query}
          searchCallback={handleSearch}
        />
        <PostListArea>
          <Container>
            <Row>
              <Col lg={8}>
                <SearchResults />
              </Col>
              <Col lg={4}>
                <WidgetPostList
                  title={"Ultimi post su BestOnDesk"}
                  marginBottom={30}
                  limit={3}
                  type={"last"}
                />
                <WidgetSocial marginBottom={30} />
                <WidgetPostList
                  title={"Popolari su BestOnDesk"}
                  marginBottom={30}
                  type={"fixed"}
                  fixedSlugs={[
                    "le-migliori-sedie-da-ufficio",
                    "i-migliori-notebook",
                  ]}
                />
              </Col>
            </Row>
          </Container>
        </PostListArea>
      </InstantSearch>
    </GlobalWrapper>
  );
};
