import styled from "styled-components";
import {
  ENTERED,
  EXITED,
  TransitionStatus,
} from "react-transition-group/Transition";
import { SlideArrow } from "../../../../../styles/global-components.style";

const StyledTabContent = styled.div``;

const SingleTabContent = styled.div<{ state: TransitionStatus }>`
  margin-top: 40px;
  transition: opacity 0.15s linear;
  opacity: ${(props) => (props.state === ENTERED ? 1 : 0)};
  display: ${(props) => (props.state === EXITED ? "none" : "block")};
`;

const PrevSlideArrowBetweenSide = styled(SlideArrow)`
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.theme.extends.transition}
  opacity: 0;

  .slick-slider:hover & {
    opacity: 1;
    left: -8px;
    @media ${(props) => props.theme.layouts.sm} {
      left: 14px;
    }
  }
`;

const NextSlideArrowBetweenSide = styled(PrevSlideArrowBetweenSide)`
  left: auto !important;
  right: -12px !important;

  .slick-slider:hover & {
    right: -8px !important;
    @media ${(props) => props.theme.layouts.sm} {
      right: 14px !important;
    }
  }
`;

export {
  StyledTabContent,
  SingleTabContent,
  PrevSlideArrowBetweenSide,
  NextSlideArrowBetweenSide,
};
