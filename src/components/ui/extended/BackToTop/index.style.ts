import styled from "styled-components";

const StyledBackToTop = styled.button<{ show: boolean }>`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 100%;
  position: fixed;
  bottom: 18px;
  right: 16px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  cursor: pointer;

  &::after {
    content: "\\f106";
    font-style: normal;
    color: #fff;
    font-family: ${(props) => props.theme.fonts.family.fontAwesome};
    font-weight: 400;
    font-size: 26px;
    line-height: 48px;
  }

  ${(props) =>
    props.show &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export { StyledBackToTop };
