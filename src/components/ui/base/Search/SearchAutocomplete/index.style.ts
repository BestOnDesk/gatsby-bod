import styled, { css } from "styled-components";

const StyledSearchAutocomplete = styled.div<{ focus: boolean }>`
  display: flex;
  justify-content: flex-end;

  ${(props) =>
    props.focus &&
    css`
      position: fixed !important;
      justify-content: flex-start !important;
      align-items: center !important;
      flex-direction: column !important;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
    `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  background: ${(props) => props.theme.colors.lightTransparent};
  width: 100vw;
  height: 100vh;
`;

const Close = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2rem;
  right: 2rem;
  text-align: center;
  z-index: 100;
  width: 48px;
  height: 48px;
  background: ${(props) => props.theme.colors.lightest};
  border-radius: 9999px;
  opacity: 1;
  cursor: pointer;

  i {
    font-size: 24px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export { StyledSearchAutocomplete, Overlay, Close };
