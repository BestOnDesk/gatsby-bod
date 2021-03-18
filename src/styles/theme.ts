export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export type ThemeModeType = ThemeMode.Light | ThemeMode.Dark;

const baseTheme: { [property: string]: any } = {};
const t = baseTheme;

export const lightTheme = {
  ...baseTheme,
  mode: ThemeMode.Light,
  name: "Light",
};
export const darkTheme = {
  ...baseTheme,
  mode: ThemeMode.Dark,
  name: "Dark",
};

export const themes = [lightTheme, darkTheme];
