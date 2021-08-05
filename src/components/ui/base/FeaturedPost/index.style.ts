import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import { HoverFlipItemWrapper } from "../../../core/HoverFlip/index.style";

const StyledFeaturedPost = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.lightest};
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }
`;

const PostCol = styled(Col)`
  margin-top: 30px;
`;

const Title = styled.h4`
  margin-bottom: 0;

  a {
    position: relative;
    display: inline;
    background-image: linear-gradient(
      to right,
      currentColor 0%,
      currentColor 100%
    );
    background-size: 0px 2px;
    background-position: 0px 95%;
    transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
    padding: 0.1% 0px;
    background-repeat: no-repeat;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
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

    ${Title} {
      a {
        background-size: 100% 2px;
      }
    }
  }

  @media ${(props) => props.theme.layouts.largeMobile} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
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
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    font-size: ${(props) => props.theme.fonts.size.b3};
    line-height: 20px;
    margin: 8px;
    position: relative;
    font-weight: ${(props) => props.theme.fonts.weight.pMedium};
    text-transform: uppercase;
    ${(props) => props.theme.extends.transition}

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
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
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

const PostThumbnail = styled.div`
  min-width: 250px;
  overflow: hidden;
  transition: 0.5s;
  position: relative;

  @media ${(props) => props.theme.layouts.lg} {
    min-width: 150px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    min-width: 160px;
  }
  @media ${(props) => props.theme.layouts.largeMobile} {
    flex-basis: 100%;
  }
  a {
    display: block;
    div {
      overflow: hidden;
      border-radius: 100%;
    }
    img {
      width: 100%;
      transition: 0.5s;
    }
  }
`;

export {
  StyledFeaturedPost,
  PostCol,
  ContentBlock,
  PostContent,
  PostCat,
  PostCatList,
  Title,
  PostThumbnail,
};
