import styled from "styled-components";
import { StyledTitle } from "../../components/core/Title/index.style";

const Banner = styled.div`
  height: 670px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 80px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    background: linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1a1a1a 100%);
    opacity: 0.8;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80%;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;

  ${StyledTitle} {
    color: #ffffff;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.lighter};
`;

export { Banner, Inner, Description };
