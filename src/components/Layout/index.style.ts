import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div``;

const GlobalStyles = createGlobalStyle`
    img {
        vertical-align: middle !important;
        max-width: 100% !important;
        height: auto !important;
        border-width: 0px !important;
        border-style: initial !important;
        border-color: initial !important;
        border-image: initial !important;
    }
`;

export { Wrapper, GlobalStyles };
