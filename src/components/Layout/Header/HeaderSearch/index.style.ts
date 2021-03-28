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
  flex-grow: 1 !important;
  @media ${(props) => props.theme.layouts.largeMobile} {
    flex-grow: 0 !important;
  }
  ${Search} {
    input {
      min-width: 245px !important;
      height: 40px !important;
      @media only screen and (min-width: 1600px) and (max-width: 1800px) {
        min-width: 220px !important;
      }
      @media ${(props) => props.theme.layouts.laptopDevice} {
        min-width: 143px !important;
        height: 35px !important;
      }
      @media ${(props) => props.theme.layouts.sm} {
        min-width: 174px !important;
      }
      @media ${(props) => props.theme.layouts.largeMobile} {
        display: none !important;
      }
    }

    ${SearchButton} {
      i {
        @media ${(props) => props.theme.layouts.largeMobile} {
          font-weight: 900 !important;
          color: ${(props) => props.theme.colors.heading} !important;
        }
      }

      @media ${(props) => props.theme.layouts.largeMobile} {
        position: static !important;
        transform: none !important;
        background: ${(props) => props.theme.colors.lightest} !important;
        width: 40px !important;
        height: 40px !important;
        line-height: 40px !important;
        text-align: center !important;
        display: block !important;
        border-radius: 100% !important;
        font-size: 14px !important;
      }
    }
  }
`;

export { HeaderSearch, HeaderSearchForm };
