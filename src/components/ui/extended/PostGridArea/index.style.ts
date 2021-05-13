import styled, { css } from "styled-components";
import { Row } from "styled-bootstrap-grid";

const StyledPostGridArea = styled.div<{ backgroundGrey?: boolean }>`
  padding: 80px 0;
  @media ${(props) => props.theme.layouts.md} {
    padding: 80px 0;
  }
  @media ${(props) => props.theme.layouts.sm} {
    padding: 60px 0;
  }

  ${(props) =>
    props.backgroundGrey &&
    css`
      background: ${(props) => props.theme.colors.lightest};
    `}
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
