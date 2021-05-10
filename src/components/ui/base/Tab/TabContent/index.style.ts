import styled, { css } from "styled-components";

export interface SingleTabContentProps {
  active: boolean;
}

const StyledTabContent = styled.div``;

const SingleTabContent = styled.div<SingleTabContentProps>`
  display: none;
  margin-top: 40px;
  transition: opacity 0.15s linear;

  ${(props) =>
    props.active &&
    css`
      display: block;
      opacity: 1;
    `}
`;

export { StyledTabContent, SingleTabContent };
