import styled from "styled-components";

const StyledMorePosts = styled.div`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.lightest};
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }
`;

export { StyledMorePosts };
