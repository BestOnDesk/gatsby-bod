import styled, { css } from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";
import { Link } from "gatsby";

const StyledWidgetCategories = styled.div<{ marginBottom?: number }>`
  background: transparent;
  padding: 0;
  border-radius: ${(props) => props.theme.borders.radius};

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}px;
    `}
`;

const SidebarInner = styled.div``;

const List = styled.ul`
  ${(props) => props.theme.extends.listStyle}
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

const Item = styled.li`
  padding: 5px;
  margin: 0;
  flex-basis: 50%;
`;

const Content = styled.div`
  ${StyledTitle} {
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.gray};
    ${(props) => props.theme.extends.transition}
  }
`;

const Inner = styled(Link)`
  background: #fbfbfd;
  ${(props) => props.theme.borders.radius};
  display: flex;
  padding: 5px;
  align-items: center;

  &:hover {
    ${Content} {
      ${StyledTitle} {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

const Thumbnail = styled.div`
  width: 50px;
  margin-right: 15px;
  display: flex;

  > div {
    width: 100%;
    border-radius: 100%;
  }
`;

export {
  StyledWidgetCategories,
  SidebarInner,
  List,
  Item,
  Inner,
  Thumbnail,
  Content,
};
