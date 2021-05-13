import styled, { css } from "styled-components";
import { Row } from "styled-bootstrap-grid";
import { StyledTitle } from "../../../core/Title/index.style";

const StyledCategoriesList = styled.div<{ backgroundGrey?: boolean }>`
  padding: 80px 0;
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }

  ${(props) =>
    props.backgroundGrey &&
    css`
      background: ${(props) => props.theme.colors.lightest};
    `}
`;

const TitleRow = styled(Row)`
  margin-bottom: 30px;
`;

const ListCategories = styled.div`
  margin: -15px;
  margin-bottom: -30px;
  display: flex;
  flex-wrap: wrap;

  @media ${(props) => props.theme.layouts.lg} {
    margin: -10px;
  }
  @media ${(props) => props.theme.layouts.md} {
    margin: -10px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    margin: -10px;
  }
`;

const SingleCat = styled.div`
  padding: 15px;
  position: relative;
  z-index: 1;
  flex-basis: 16.666%;

  @media ${(props) => props.theme.layouts.lg} {
    padding: 10px;
    flex-basis: 16.66%;
  }
  @media ${(props) => props.theme.layouts.md} {
    padding: 10px;
    flex-basis: 25%;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 10px;
    flex-basis: 33.33%;
  }
  @media ${(props) => props.theme.layouts.largeMobile} {
    padding: 10px;
    flex-basis: 50%;
  }
  a {
    display: block;
  }
`;

const Thumbnail = styled.div`
  > div {
    display: block;
  }
  img {
    border-radius: ${(props) => props.theme.borders.radius};
    width: 100%;
    transition: all 0.5s !important;
  }
`;

const Inner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borders.radius};
  &::before {
    position: absolute;
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    opacity: 0.4;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    border-radius: ${(props) => props.theme.borders.radius};
    transition: all 0.5s;
    z-index: 2;
  }
  &:hover {
    &::before {
      transform: scale(1.1);
    }
    ${Thumbnail} {
      img {
        transform: scale(1.1);
      }
    }
  }
`;

const Content = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  padding-bottom: 22px;
  z-index: 2;
  ${StyledTitle} {
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.white};
  }
`;

export {
  StyledCategoriesList,
  TitleRow,
  ListCategories,
  SingleCat,
  Inner,
  Thumbnail,
  Content,
};
