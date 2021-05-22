import styled from "styled-components";
import { StyledPostContent } from "../ContentBlock/PostContent/index.style";

const StyledMorePosts = styled.div`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.lightest};
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }

  ${StyledPostContent} {
    padding-top: 20px;
  }
`;

export { StyledMorePosts };
