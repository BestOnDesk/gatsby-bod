import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledPostImage = styled(GatsbyImage)`
  border-radius: ${(props) => props.theme.borders.radius};
  margin-bottom: 30px;
`;

export { StyledPostImage };
