import styled from "styled-components";

const Search = styled.div`
  position: relative !important;
  margin-bottom: 0 !important;
  text-align: right !important;
  display: inline-block !important;
`;

const SearchIcon = styled.i``;

const SearchButton = styled.button`
  position: absolute !important;
  left: 0 !important;
  display: inline-block !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: auto !important;
  border: 0 none !important;
  padding: 0 !important;
  left: 21px !important;
  i {
    font-size: 16px !important;
    color: ${(props) => props.theme.colors.gray} !important;
  }
`;

const SearchInput = styled.input`
  background: ${(props) => props.theme.colors.lightest} !important;
  border-radius: 44px !important;
  padding-left: 46px !important;
  color: ${(props) => props.theme.colors.gray} !important;
  max-width: 245px !important;
  font-size: 14px !important;
`;

export { Search, SearchButton, SearchInput, SearchIcon };
