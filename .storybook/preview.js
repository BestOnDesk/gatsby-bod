import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/styles/global.style";
import { themes } from "../src/styles/theme";
import { ThemesProvider } from "storybook-addon-styled-component-theme";
import { BaseCSS } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((s) => (
  <>
    <BaseCSS />
    <ThemesProvider themes={themes} ThemeProvider={ThemeProvider}>
      <GlobalStyle />
      {s()}
    </ThemesProvider>
  </>
));
