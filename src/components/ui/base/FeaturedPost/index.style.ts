import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";

const StyledFeaturedPost = styled.div`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.lightest};
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }
`;

const TitleSection = styled.div``;

const PostCol = styled(Col)`
  margin-top: 30px;
`;

const ContentBlock = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.lighter};
  border-radius: ${(props) => props.theme.borders.radius};
  padding: 35px 30px;
  height: 100%;
  align-items: center;
  ${(props) => props.theme.extends.transition}

  &:hover {
    background: ${(props) => props.theme.colors.white};
  }

  @media ${(props) => props.theme.layouts.largeMobile} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 30px;
  @media ${(props) => props.theme.layouts.largeMobile} {
    flex-basis: 100%;
    margin-top: 30px;
    padding-right: 0;
  }
`;

const PostCat = styled.div`
  margin-bottom: 22px;
  @media ${(props) => props.theme.layouts.lg} {
    margin-bottom: 10px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    margin-bottom: 10px;
  }
`;

const PostCatList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -8px;
  a {
    color: ${(props) => props.theme.colors.secondary};
    display: flex;
    font-size: ${(props) => props.theme.fonts.size.b3};
    line-height: 20px;
    margin: 8px;
    position: relative;
    font-weight: ${(props) => props.theme.fonts.weight.pMedium};
    text-transform: uppercase;
    ${(props) => props.theme.extends.transition}

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

    &::after {
      content: ",";
      position: absolute;
      right: 0;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  ${HoverFlipItemWrapper} {
    span {
      &::after {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export {
  StyledFeaturedPost,
  TitleSection,
  PostCol,
  ContentBlock,
  PostContent,
  PostCat,
  PostCatList,
};
