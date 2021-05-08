import styled from "styled-components";
import { HoverFlipItemWrapper } from "../../../../../core/HoverFlip/index.style";

const StyledPostCat = styled.div`
  margin-bottom: 10px;
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
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fonts.weight.pMedium};
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

export { StyledPostCat, PostCatList };
