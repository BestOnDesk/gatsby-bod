import styled from "styled-components";
import { HoverFlipItemWrapper } from "../../../../core/HoverFlip/index.style";
import { media } from "styled-bootstrap-grid";

const FooterArea = styled.div`
  padding: 40px 0 !important;
  background-color: white !important;
`;

const FooterTop = styled.div``;

const Inner = styled.div`
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  padding-bottom: 20px !important;
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter} !important;
  margin-bottom: 20px !important;
`;

const FollowTitle = styled.h5`
  margin-right: 20px !important;
  margin-bottom: 0px !important;

  @media ${(props) => props.theme.layouts.smallMobile} {
    margin-bottom: 10px !important;
  }
`;

const CopyrightArea = styled.div``;

const CopyrightLeft = styled.div`
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
`;

const Logo = styled.div`
  margin-right: 53px !important;
  @media ${(props) => props.theme.layouts.sm} {
    flex-basis: 100% !important;
    margin-bottom: 20px !important;
  }
`;

const MainMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: start !important;
  li {
    margin: 0 18px !important;

    @media ${(props) => props.theme.layouts.sm} {
      margin: 0 5px !important;
    }

    &:first-child {
      margin-left: 0 !important;
    }

    a {
      color: ${(props) => props.theme.colors.midgray} !important;
      font-size: 16px !important;
      line-height: 22px !important;
      display: block !important;
      font-weight: 500 !important;
      height: auto !important;
      line-height: initial !important;
      ${(props) => props.theme.extends.transition}
    }

    ${HoverFlipItemWrapper} {
      span {
        &::before {
          color: ${(props) => props.theme.colors.midgray} !important;
        }
        &::after {
          color: ${(props) => props.theme.colors.primary} !important;
        }
      }
    }
  }
`;

const CopyrightRight = styled.div`
  text-align: left !important;

  p {
    color: ${(props) => props.theme.colors.midgray} !important;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 20px !important;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-top: 20px !important;
  }

  ${media.lg`
    text-align: right !important;
  `}
`;

const CopyrightText = styled.p`
  font-size: ${(props) => props.theme.fonts.size.b3} !important;
  line-height: ${(props) => props.theme.fonts.height.b3} !important;
`;

export {
  FooterArea,
  FooterTop,
  Inner,
  FollowTitle,
  CopyrightArea,
  CopyrightLeft,
  Logo,
  MainMenu,
  CopyrightRight,
  CopyrightText,
};
