import styled from "styled-components";
import { SocialShareTransparent } from "../PostMeta/index.style";

const StyledPostListArea = styled.div`
  padding-top: 80px;
  color: #fff;
  @media ${(props) => props.theme.layouts.md} {
    padding-top: 80px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding-top: 60px;
  }

  ${SocialShareTransparent} {
    margin: 0;
  }
`;

export { StyledPostListArea };
