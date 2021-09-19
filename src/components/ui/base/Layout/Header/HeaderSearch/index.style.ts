import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const HeaderSearch = styled.div`
  text-align: right;
  align-items: center;
  display: flex;

  @media ${(props) => props.theme.layouts.largeMobile} {
    text-align: center;
    justify-content: center;
  }
`;

const HeaderSearchForm = styled.form`
  flex-grow: 1;
  @media ${(props) => props.theme.layouts.largeMobile} {
    flex-grow: 0;
  }
`;

const MetabarBlock = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: flex;
  align-items: center;
  li {
    margin-left: 20px;
    margin-top: 0;
    margin-bottom: 0;
    @media only screen and (min-width: 1600px) and (max-width: 1800px) {
      margin-left: 8px;
    }
    @media ${(props) => props.theme.layouts.laptopDevice} {
      margin-left: 5px;
    }
    @media ${(props) => props.theme.layouts.md} {
      margin-left: 10px;
    }
    @media ${(props) => props.theme.layouts.sm} {
      margin-left: 10px;
    }

    img {
      border-radius: 100%;
      max-height: 40px;
      min-width: 40px;
      @media ${(props) => props.theme.layouts.laptopDevice} {
        max-height: 35px;
        min-width: 35px;
      }
    }
  }
`;

const MetabarIcon = styled.li`
  a {
    background: ${(props) => props.theme.colors.lightest};
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: block;
    border-radius: 100%;
    font-size: 14px;
    ${(props) => props.theme.extends.transition}

    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: #fff;
    }

    @media ${(props) => props.theme.layouts.laptopDevice} {
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 12px;
    }
  }
`;

const MobileSearchIcon = styled(MetabarIcon)`
  margin: 0 8px 0 0;

  ${media.sm`
    display: none;
  `}

  a {
    color: ${(props) => props.theme.colors.body};
    i {
      font-weight: 900;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: block;
  margin-left: 20px;

  @media ${(props) => props.theme.layouts.largeMobile} {
    margin: 0 !important;
  }

  @media ${(props) => props.theme.layouts.md} {
    margin-left: 10px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    margin-left: 10px;
  }

  ${media.xl`
    display: none;
  `}
`;

const HamburgerInner = styled.div``;

const HamburgerIcon = styled.div`
  background: ${(props) => props.theme.colors.lightest};
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: block;
  border-radius: 100%;
  font-size: 14px;
  ${(props) => props.theme.extends.transition}
  display: inline-block;
  color: ${(props) => props.theme.colors.heading};
  i {
    font-weight: 900;
  }
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
`;

export {
  HeaderSearch,
  HeaderSearchForm,
  MetabarBlock,
  MetabarIcon,
  MobileSearchIcon,
  HamburgerMenu,
  HamburgerInner,
  HamburgerIcon,
};
