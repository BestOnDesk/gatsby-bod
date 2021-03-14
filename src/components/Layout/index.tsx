import * as React from "react";
import { ReactChild } from "react";
import { GlobalStyles, Wrapper } from "./index.style";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme";

interface LayoutProps {
  children: ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </Wrapper>
  );
};

export default Layout;
