import styled from "styled-components";
import { Search, SearchButton } from "../../../Search/index.style";

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
  ${Search} {
    input {
      min-width: 245px;
      height: 40px;
      @media only screen and (min-width: 1600px) and (max-width: 1800px) {
        min-width: 220px;
      }
      @media ${(props) => props.theme.layouts.laptopDevice} {
        min-width: 143px;
        height: 35px;
      }
      @media ${(props) => props.theme.layouts.sm} {
        min-width: 174px;
      }
      @media ${(props) => props.theme.layouts.largeMobile} {
        display: none;
      }
    }

    ${SearchButton} {
      i {
        @media ${(props) => props.theme.layouts.largeMobile} {
          font-weight: 900;
          color: ${(props) => props.theme.colors.heading};
        }
      }

      @media ${(props) => props.theme.layouts.largeMobile} {
        position: static;
        transform: none;
        background: ${(props) => props.theme.colors.lightest};
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: block;
        border-radius: 100%;
        font-size: 14px;
      }
    }
  }
`;

export { HeaderSearch, HeaderSearchForm };
