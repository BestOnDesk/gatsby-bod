import * as React from "react";
import { ReactChild } from "react";
import { GlobalStyles, Wrapper } from "./index.style";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/theme";
import { Helmet } from "react-helmet";
import { BaseCSS } from "styled-bootstrap-grid";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const GlobalWrapper = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <BaseCSS />
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </Wrapper>
  );
};

export default GlobalWrapper;
