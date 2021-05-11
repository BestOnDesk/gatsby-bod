import styled from "styled-components";
import {
  ENTERED,
  EXITED,
  TransitionStatus,
} from "react-transition-group/Transition";

const StyledGridTabContent = styled.div`
  margin-top: 20px;
`;

const SinglePostGrid = styled.div<{ state: TransitionStatus }>`
  transition: opacity 0.15s linear;
  opacity: ${(props) => (props.state === ENTERED ? 1 : 0)};
  display: ${(props) => (props.state === EXITED ? "none" : "block")};
`;

const PostGridContent = styled.div``;

export { StyledGridTabContent, SinglePostGrid, PostGridContent };
