import styled from "styled-components";
import { SocialShareTransparent } from "../PostMeta/index.style";

const StyledPostListArea = styled.div`
  padding: 80px 0;
  color: #fff;
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }

  ${SocialShareTransparent} {
    margin: 0;
  }
`;

export { StyledPostListArea };
