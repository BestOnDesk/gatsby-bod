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
import { IState } from "../../../state/reducers";
import { connect } from "react-redux";

interface GlobalWrapperProps {
  children: ReactChild | ReactChild[];
  withLayout?: boolean;
  themeMode: ThemeMode;
  headerWithShadow?: boolean;
  headerSticky?: boolean;
}

const GlobalWrapper = ({
  children,
  withLayout,
  themeMode,
  headerWithShadow,
  headerSticky,
}: GlobalWrapperProps) => {
  const theme = lightTheme;
  theme.mode = themeMode;

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
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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

const mapStateToProps = (state: IState) => ({
  themeMode: state.themeReducer.themeMode,
});

export default connect(mapStateToProps)(GlobalWrapper);
