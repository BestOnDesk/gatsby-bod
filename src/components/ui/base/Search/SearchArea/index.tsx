import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Inner,
  SearchButton,
  SearchInput,
  StyledSearchArea,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Title from "../../../../core/Title";
import { connectSearchBox } from "react-instantsearch-dom";

interface SearchAreaProps {
  title: string;
  value?: string;
  searchCallback: Function;
  refine: (...args: any[]) => any;
}

const SearchArea = (props: SearchAreaProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    props.refine(searchQuery);
    props.searchCallback(searchQuery);
  };

  useEffect(() => {
    setSearchQuery(props.value || "");
    if (props.value && props.value != "") {
      props.refine(props.value);
      props.searchCallback(props.value);
    }
  }, [props.refine]);

  return (
    <StyledSearchArea>
      <Container>
        <Row>
          <Col lg={12}>
            <Inner>
              <Title level={1}>{props.title}</Title>
            </Inner>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <SearchInput
              placeholder={"Cerca tra gli articoli"}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              value={searchQuery}
            />
          </Col>
          <Col md={3}>
            <SearchButton onClick={() => handleSearch()}>Cerca</SearchButton>
          </Col>
        </Row>
      </Container>
    </StyledSearchArea>
  );
};

export default connectSearchBox(SearchArea);
