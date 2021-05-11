import styled from "styled-components";
import { Row } from "styled-bootstrap-grid";

const StyledPostGridArea = styled.div`
  padding: 80px 0;
  background: ${(props) => props.theme.colors.lightest};
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }
`;

const SocialRow = styled(Row)`
  padding-bottom: 80px;
  @media ${(props) => props.theme.layouts.md} {
    padding-bottom: 80px;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding-bottom: 60px;
  }
`;

export { StyledPostGridArea, SocialRow };
