import styled, { css } from "styled-components";

export interface SingleTabContentProps {
  active: boolean;
}

const StyledTabContent = styled.div``;

const SingleTabContent = styled.div<SingleTabContentProps>`
  display: none;
  margin-top: 40px;
  transition: opacity 0.15s linear;
  opacity: 0;

  ${(props) =>
    props.active &&
    css`
      height: auto;
      display: block;
      opacity: 1;
    `}

  .slick-layout-wrapper {
    margin: 0 -15px;
  }
  .slick-single-layout {
    padding: 0 15px;
  }
`;

export { StyledTabContent, SingleTabContent };
