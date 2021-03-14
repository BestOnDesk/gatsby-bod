export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export interface Theme {
  mode: ThemeMode;
}

const lightTheme: Theme = {
  mode: ThemeMode.Light,
};

const darkTheme: Theme = {
  mode: ThemeMode.Dark,
};

export { lightTheme, darkTheme };
