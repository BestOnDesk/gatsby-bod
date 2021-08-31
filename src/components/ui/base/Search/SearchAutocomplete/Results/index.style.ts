import styled from "styled-components";
import { StyledTitle } from "../../../../../core/Title/index.style";
import { StyledContentBlock } from "../../../ContentBlock/index.style";

const StyledResults = styled.div`
  z-index: 99;
  margin-top: 8px;
  max-width: 750px;
  width: 100%;
  overflow-y: auto;

  div.ais-PoweredBy {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    span.ais-PoweredBy-text {
      margin-right: 8px;
    }
  }
`;

const InnerContainer = styled.div`
  z-index: 99;
  background: ${(props) => props.theme.colors.lightest};
  padding: 8px;
  width: 100%;
  border-radius: ${(props) => props.theme.borders.radiusBig};

  ${StyledTitle} {
    text-align: left;
  }

  ${StyledContentBlock}:last-child {
    margin-bottom: 0 !important;
  }
`;

const NoResults = styled.div`
  text-align: center;
  font-weight: 500;
`;

export { StyledResults, InnerContainer, NoResults };
