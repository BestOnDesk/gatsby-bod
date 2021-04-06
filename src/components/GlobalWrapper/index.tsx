import * as React from "react";
import { ReactChild } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { BaseCSS } from "styled-bootstrap-grid";
import { GlobalStyle } from "styles/global.style";
import Layout from "components/Layout";
import "styles/font-awesome.min.css";
import { lightTheme } from "../../styles/theme";
import { ThemeMode } from "../../app-types/style";
import { IState } from "../../state/reducers";
import { connect } from "react-redux";

interface GlobalWrapperProps {
  children: ReactChild | ReactChild[];
  withLayout?: boolean;
  themeMode: ThemeMode;
}

const GlobalWrapper = ({
  children,
  withLayout,
  themeMode,
}: GlobalWrapperProps) => {
  const theme = lightTheme;
  theme.mode = themeMode;

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
        <GlobalStyle />
        {withLayout ? <Layout>{children}</Layout> : children}
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  themeMode: state.themeReducer.themeMode,
});

export default connect(mapStateToProps)(GlobalWrapper);
