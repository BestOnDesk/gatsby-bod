import styled from "styled-components";

const HeaderSearch = styled.div`
  text-align: right !important;
  align-items: center !important;
  display: flex !important;

  @media ${(props) => props.theme.layouts.largeMobile} {
    text-align: center !important;
    justify-content: center !important;
  }
`;

const HeaderSearchForm = styled.form`
  flex-grow: 1;
  @media ${(props) => props.theme.layouts.largeMobile} {
    flex-grow: 0;
  }
`;

export { HeaderSearch, HeaderSearchForm };
