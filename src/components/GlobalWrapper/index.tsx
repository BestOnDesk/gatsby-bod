import * as React from "react";
import { ReactChild } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/theme";
import { Helmet } from "react-helmet";
import { BaseCSS } from "styled-bootstrap-grid";
import { GlobalStyle } from "../../styles/global.style";
import { Layout } from "../Layout";

interface GlobalWrapperProps {
  children: ReactChild | ReactChild[];
  withLayout?: boolean;
}

const GlobalWrapper = ({ children, withLayout }: GlobalWrapperProps) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <BaseCSS />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {withLayout ? <Layout>{children}</Layout> : children}
      </ThemeProvider>
    </>
  );
};

export default GlobalWrapper;
