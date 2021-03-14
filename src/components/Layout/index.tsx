import * as React from "react";
import { ReactChild } from "react";
import { GlobalStyles, Wrapper } from "./index.style";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme";
import { Helmet } from "react-helmet";
import { BaseCSS } from "styled-bootstrap-grid";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <BaseCSS />
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
    </Wrapper>
  );
};

export default Layout;
