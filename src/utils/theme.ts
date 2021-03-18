import { ThemeMode } from "../styles/theme";

const isDark = (theme: any) => theme.mode === ThemeMode.Dark;

const isLight = (theme: any) => theme.mode === ThemeMode.Light;

export { isDark, isLight };
