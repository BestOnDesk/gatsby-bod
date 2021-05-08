import styled from "styled-components";

const StyledTabArea = styled.div`
  padding: 80px 0;
  color: #fff;
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }
`;

const Wrapper = styled.div``;

export { StyledTabArea, Wrapper };
