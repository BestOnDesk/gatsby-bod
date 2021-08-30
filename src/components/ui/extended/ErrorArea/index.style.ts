import styled from "styled-components";
import { StyledTitle } from "../../../core/Title/index.style";

const StyledErrorArea = styled.div<{ backgroundUrl: string }>`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("${(props) => props.backgroundUrl}");
  background-position: bottom center;
  @media ${(props) => props.theme.layouts.md} {
    padding: 150px 0;
    background-position: 26% 33%;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 100px 0;
    background-position: 26% 33%;
  }
`;

const Inner = styled.div`
  ${StyledTitle} {
    margin: 20px 0;
    color: ${(props) => props.theme.colors.white};
  }
  p {
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export { StyledErrorArea, Inner };
