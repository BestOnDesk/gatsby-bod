import styled, { css } from "styled-components";
import { Link } from "gatsby";

const StyledTagsArea = styled.div<{ marginBottom?: number }>`
  margin: -5px;
  display: flex;
  flex-wrap: wrap;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}px;
    `}
`;

const TagLink = styled(Link)`
  border: 1px solid ${(props) => props.theme.colors.lighter};
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
  height: 30px;
  padding: 0 10px;
  margin: 5px;
  display: inline-block;
  line-height: 27px;
  border-radius: 4px;
  ${(props) => props.theme.extends.transition};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export { StyledTagsArea, TagLink };
