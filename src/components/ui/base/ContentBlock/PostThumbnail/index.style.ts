import styled from "styled-components";

const StyledPostThumbnail = styled.div`
  position: relative;
  a {
    display: block;
    overflow: hidden;
    border-radius: ${(props) => props.theme.borders.radius};
    img {
      width: 100%;
    }
  }
`;

export { StyledPostThumbnail };
