import styled from "styled-components";
import { StyledTitle } from "../../../../core/Title/index.style";
import { AuthorInfo, StyledAboutAuthor } from "../../AboutAuthor/index.style";
import { media } from "styled-bootstrap-grid";

const StyledSearchArea = styled.div`
  padding: 80px 0;
  background: ${(props) => props.theme.colors.lightest};

  @media ${(props) => props.theme.layouts.largeMobile} {
    padding: 40px 0;
  }

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
  margin: 12px 0;

  ${StyledTitle} {
    margin-bottom: 0;
  }
`;

const SearchInput = styled.input`
  ${(props) => props.theme.extends.transition}
  height: 60px;
  background: ${(props) => props.theme.colors.white};
  border: 0 !important;
  border-radius: 500px;
  font-size: 22px;

  &::placeholder {
    color: ${(props) => props.theme.colors.midgray} !important;
  }
`;

const SearchButton = styled.button`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 500px;
  margin-top: 12px;

  ${media.md`
    margin-top: 0;
  `}
`;

export { StyledSearchArea, Inner, SearchInput, SearchButton };
