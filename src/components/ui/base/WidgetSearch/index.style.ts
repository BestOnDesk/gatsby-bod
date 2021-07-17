import styled, { css } from "styled-components";
import { SearchButton } from "../Search/index.style";
import SearchAutocomplete from "../SearchAutocomplete";
import { StyledSearchBox } from "../SearchAutocomplete/SearchBox/index.style";

const StyledWidgetSearch = styled.div<{ marginBottom?: number }>`
  background: ${(props) => props.theme.colors.extra03};
  padding: 30px;
  border-radius: ${(props) => props.theme.borders.radius};

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}px;
    `}
`;

const WidgetTitle = styled.h5`
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter};
  padding-bottom: 7px;
  margin-bottom: 20px;
  text-align: center;
`;

const CustomSearchAutocomplete = styled(SearchAutocomplete)`
  ${StyledSearchBox} {
    max-width: 100% !important;
    width: 100% !important;
    height: 40px !important;
  }
`;

export { StyledWidgetSearch, WidgetTitle, CustomSearchAutocomplete };
