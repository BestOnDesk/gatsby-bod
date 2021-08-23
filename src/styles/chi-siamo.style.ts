import styled from "styled-components";

const Inner = styled.div`
  p {
    margin: 0 0 30px;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const CustomP = styled.p`
  margin: 0 0 10px !important;
`;

const AboutUs = styled.div``;

export { Inner, CustomP, AboutUs };
