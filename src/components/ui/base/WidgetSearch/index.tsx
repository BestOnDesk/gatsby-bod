import React from "react";
import {
  CustomSearchAutocomplete,
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
      <CustomSearchAutocomplete />
    </StyledWidgetSearch>
  );
};

export default WidgetSearch;
