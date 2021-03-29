import styled from "styled-components";
import { Search, SearchButton } from "../../../Search/index.style";
import { media } from "styled-bootstrap-grid";

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

const MetabarBlock = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: flex !important;
  align-items: center !important;
  li {
    margin-left: 20px !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    @media only screen and (min-width: 1600px) and (max-width: 1800px) {
      margin-left: 8px !important;
    }
    @media ${(props) => props.theme.layouts.laptopDevice} {
      margin-left: 5px !important;
    }
    @media ${(props) => props.theme.layouts.md} {
      margin-left: 10px !important;
    }
    @media ${(props) => props.theme.layouts.sm} {
      margin-left: 10px !important;
    }

    img {
      border-radius: 100% !important;
      max-height: 40px !important;
      min-width: 40px !important;
      @media ${(props) => props.theme.layouts.laptopDevice} {
        max-height: 35px !important;
        min-width: 35px !important;
      }
    }
  }
`;

const MetabarIcon = styled.li`
  a {
    background: ${(props) => props.theme.colors.lightest} !important;
    width: 40px !important;
    height: 40px !important;
    line-height: 40px !important;
    text-align: center !important;
    display: block !important;
    border-radius: 100% !important;
    font-size: 14px !important;
    ${(props) => props.theme.extends.transition}

    &:hover {
      background: ${(props) => props.theme.colors.primary} !important;
      color: #fff !important;
    }

    @media ${(props) => props.theme.layouts.laptopDevice} {
      width: 35px !important;
      height: 35px !important;
      line-height: 35px !important;
      font-size: 12px !important;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: block !important;
  margin-left: 20px !important;
  @media ${(props) => props.theme.layouts.md} {
    margin-left: 10px !important;
  }
  @media ${(props) => props.theme.layouts.sm} {
    margin-left: 10px !important;
  }

  ${media.xl`
    display: none !important;
  `}
`;

const HamburgerInner = styled.div``;

const HamburgerIcon = styled.div`
  background: ${(props) => props.theme.colors.lightest} !important;
  width: 40px !important;
  height: 40px !important;
  line-height: 40px !important;
  text-align: center !important;
  display: block !important;
  border-radius: 100% !important;
  font-size: 14px !important;
  ${(props) => props.theme.extends.transition}
  display: inline-block !important;
  color: ${(props) => props.theme.colors.heading} !important;
  i {
    font-weight: 900 !important;
  }
  &:hover {
    background: ${(props) => props.theme.colors.primary} !important;
    color: #fff !important;
  }
`;

export {
  HeaderSearch,
  HeaderSearchForm,
  MetabarBlock,
  MetabarIcon,
  HamburgerMenu,
  HamburgerInner,
  HamburgerIcon,
};
