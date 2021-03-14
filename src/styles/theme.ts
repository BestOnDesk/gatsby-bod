export enum ThemeVariation {
  Light = "light",
  Dark = "dark",
}

export interface Theme {
  variation: ThemeVariation;
}

const lightTheme: Theme = {
  variation: ThemeVariation.Light,
};

const darkTheme: Theme = {
  variation: ThemeVariation.Dark,
};

export { lightTheme, darkTheme };
