import styled from "styled-components";

const SlideArrow = styled.button`
  outline: none;
  width: 50px;
  height: 50px;
  font-size: 18px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.midgray};
  border-radius: 100%;
  z-index: 2;
  i {
    color: ${(props) => props.theme.colors.gray};
  }

  &:hover {
    background: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.shadows.primary};
    border: 1px solid ${(props) => props.theme.colors.white};
    i {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export { SlideArrow };
