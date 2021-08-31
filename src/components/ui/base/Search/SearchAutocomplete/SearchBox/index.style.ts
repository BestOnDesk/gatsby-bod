import styled, { css } from "styled-components";

const StyledSearchBox = styled.div<{ focus: boolean }>`
  position: relative;
  margin-bottom: 0;
  text-align: right;
  display: flex;
  z-index: 99;
  border: 0;
  ${(props) => props.theme.extends.transition}
  background: ${(props) => props.theme.colors.lightest};
  border-radius: 44px;
  color: ${(props) => props.theme.colors.gray};
  padding-left: 16px;
  max-width: 245px;
  height: 40px;
  font-size: 14px;

  @media ${(props) => props.theme.layouts.largeMobile} {
    display: none;
    padding: 0;
    width: 40px;
    justify-content: center;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${(props) =>
    props.focus &&
    css`
      margin-top: 20px;
      max-width: 750px;
      width: 100%;
      height: 56px;

      input {
        font-size: 24px;
        height: 56px;
      }
    `}
`;

const Input = styled.input`
  ${(props) => props.theme.extends.transition}
  border: 0 !important;

  @media ${(props) => props.theme.layouts.largeMobile} {
    display: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.body} !important;
  }
`;

export { StyledSearchBox, Input };
