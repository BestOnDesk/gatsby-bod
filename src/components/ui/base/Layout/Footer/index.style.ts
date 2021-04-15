import styled from "styled-components";
import { HoverFlipItemWrapper } from "../../../../core/HoverFlip/index.style";
import { media } from "styled-bootstrap-grid";

const FooterArea = styled.div`
  padding: 40px 0;
  background-color: white;
`;

const FooterTop = styled.div``;

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter};
  margin-bottom: 20px;
`;

const FollowTitle = styled.h5`
  margin-right: 20px;
  margin-bottom: 0px;

  @media ${(props) => props.theme.layouts.smallMobile} {
    margin-bottom: 10px;
  }
`;

const CopyrightArea = styled.div``;

const CopyrightLeft = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  margin-right: 53px;
  @media ${(props) => props.theme.layouts.sm} {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`;

const MainMenu = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  li {
    margin: 0 18px;

    @media ${(props) => props.theme.layouts.sm} {
      margin: 0 5px;
    }

    &:first-child {
      margin-left: 0;
    }

    a {
      color: ${(props) => props.theme.colors.midgray};
      font-size: 16px;
      line-height: 22px;
      display: block;
      font-weight: 500;
      height: auto;
      line-height: initial;
      ${(props) => props.theme.extends.transition}
    }

    ${HoverFlipItemWrapper} {
      span {
        &::before {
          color: ${(props) => props.theme.colors.midgray};
        }
        &::after {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
`;

const CopyrightRight = styled.div`
  text-align: left;

  p {
    color: ${(props) => props.theme.colors.midgray};
  }

  @media only screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-top: 20px;
  }

  ${media.lg`
    text-align: right;
  `}
`;

const CopyrightText = styled.p`
  font-size: ${(props) => props.theme.fonts.size.b3};
  line-height: ${(props) => props.theme.fonts.height.b3};
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
