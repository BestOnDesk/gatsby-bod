import * as React from "react";
import { ReactChild } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
import { GlobalStyle } from "styles/global.style";
import Layout from "components/ui/base/Layout";
import "styles/font-awesome.min.css";
import { lightTheme } from "../../../styles/theme";
import { ThemeMode } from "../../../app-types/style";
import SEO from "../SEO";

interface GlobalWrapperProps {
  children: ReactChild[];
  withLayout?: boolean;
  withoutFooter?: boolean;
  headerWithShadow?: boolean;
  headerSticky?: boolean;
}

const childrenContainSEO = (children: ReactChild[]) =>
  children &&
  children.filter(
    // @ts-ignore
    (child) => Object.keys(child).includes("type") && child.type === SEO
  ).length > 0;

const GlobalWrapper = ({
  children,
  withLayout,
  withoutFooter,
  headerWithShadow,
  headerSticky,
}: GlobalWrapperProps) => {
  const IS_SSR = typeof window === "undefined";

  if (!childrenContainSEO(children)) {
    throw new Error("GlobalWrapper does not have a SEO element");
  }

  const theme = lightTheme;
  theme.mode = ThemeMode.Light;

  const gridTheme = {
    gridColumns: 12,
    breakpoints: {
      xxl: 1440,
      xl: 1200,
      lg: 992,
      md: 768,
      sm: 576,
      xs: 575,
    },
    row: {
      padding: 15,
    },
    col: {
      padding: 15,
    },
    container: {
      padding: 15,
      maxWidth: {
        xxl: 1260,
        xl: 1260,
        lg: 960,
        md: 720,
        sm: 540,
        xs: 540,
      },
    },
  };

  return (
    <>
      <Helmet
        script={[
          {
            type: "text/javascript",
            innerHTML:
              "document.documentElement.className = document.documentElement.className.replace(/\\bno-js\\b/,'js');",
          },
        ]}
      >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content={theme.colors.primary} />
        <html className={IS_SSR ? "no-js" : "js"} />
      </Helmet>
      <BaseCSS />
      <ThemeProvider theme={theme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GlobalStyle />
            {withLayout ? (
              <Layout
                headerWithShadow={headerWithShadow}
                headerSticky={headerSticky}
                withoutFooter={withoutFooter}
              >
                {children}
              </Layout>
            ) : (
              children
            )}
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default GlobalWrapper;
