import styled from "styled-components";

const Search = styled.div`
  position: relative;
  margin-bottom: 0;
  text-align: right;
  display: inline-block;
`;

const SearchIcon = styled.i``;

const SearchButton = styled.button`
  position: absolute;
  left: 0;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  border: 0 none;
  padding: 0;
  left: 21px;
  i {
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const SearchInput = styled.input`
  background: ${(props) => props.theme.colors.lightest};
  border-radius: 44px !important;
  padding-left: 46px !important;
  color: ${(props) => props.theme.colors.gray} !important;
  max-width: 245px !important;
  font-size: 14px !important;
`;

export { Search, SearchButton, SearchInput, SearchIcon };
