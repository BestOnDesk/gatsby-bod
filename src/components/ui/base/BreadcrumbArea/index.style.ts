import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";
import { AuthorInfo, StyledAboutAuthor } from "../AboutAuthor/index.style";

const StyledBreadcrumbArea = styled.div`
  padding: 80px 0;
  background: ${(props) => props.theme.colors.lightest};

  ${StyledAboutAuthor} {
    border: none;
    padding: 0;

    ${AuthorInfo} {
      ${StyledTitle} {
        margin-bottom: 0;
        font-size: 30px;
        line-height: 34px;
      }
    }
  }
`;

const Inner = styled.div`
  ${StyledTitle} {
    margin-bottom: 0;
  }
`;

const BreadcrumbsUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
`;

const BreadcrumbsLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  a {
    color: ${(props) => props.theme.colors.gray};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.65em;
  }

  i {
    color: ${(props) => props.theme.colors.gray};
    margin: 0 4px;
    font-size: 0.65em;
  }
`;

export { StyledBreadcrumbArea, Inner, BreadcrumbsUl, BreadcrumbsLi };
