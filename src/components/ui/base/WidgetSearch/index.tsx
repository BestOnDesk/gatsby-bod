import React from "react";
import {
  SearchComponent,
  StyledWidgetSearch,
  WidgetTitle,
} from "./index.style";

export interface WidgetSearchProps {
  marginBottom?: number;
}

const WidgetSearch = (props: WidgetSearchProps) => {
  return (
    <StyledWidgetSearch marginBottom={props.marginBottom}>
      <WidgetTitle>Cerca</WidgetTitle>
      <SearchComponent />
    </StyledWidgetSearch>
  );
};

export default WidgetSearch;
