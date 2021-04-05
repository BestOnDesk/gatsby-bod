export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export interface BaseTheme {
  colors: { [color: string]: string };
  borders: { [border: string]: string };
  shadows: { [shadow: string]: string };
  animations: { [animation: string]: string };
  fonts: {
    family: { [family: string]: string };
    height: { [height: string]: string };
    size: { [size: string]: string };
    weight: { [weight: string]: string };
  };
  layouts: { [layout: string]: string };
  extends: { [extend: string]: string };
}

export interface Theme extends BaseTheme {
  mode: ThemeMode;
  name: string;
}
