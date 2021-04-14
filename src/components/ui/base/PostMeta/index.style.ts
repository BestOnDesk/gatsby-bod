import styled from "styled-components";

const StyledPostMeta = styled.div`
  margin-top: 34px;

  @media ${(props) => props.theme.layouts.sm} {
    margin-top: 20px;
  }
`;

export { StyledPostMeta };
