import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";

const StyledAltPostArea = styled.div`
  padding: 80px 0;
  background: ${(props) => props.theme.colors.extra04};
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }

  ${StyledTitle} {
    color: ${(props) => props.theme.colors.white};
  }
`;

export { StyledAltPostArea };
