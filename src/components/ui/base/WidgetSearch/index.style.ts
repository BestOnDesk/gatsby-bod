import styled, { css } from "styled-components";
import Search from "../Search";
import { SearchButton } from "../Search/index.style";

const StyledWidgetSearch = styled.div<{ marginBottom?: number }>`
  background: #fbfbfd;
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

const SearchComponent = styled(Search)`
  display: block;

  input {
    height: 40px !important;
    border: 0 none !important;
    max-width: 100% !important;
    font-size: 14px !important;
    line-height: 22px !important;
    padding-left: 44px !important;
  }

  ${SearchButton} {
    i {
      font-size: 14px;
    }
  }
`;

export { StyledWidgetSearch, WidgetTitle, SearchComponent };
