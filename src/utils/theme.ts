import { Theme, ThemeMode } from "../styles/theme";

const isDark = (theme: Theme) => theme.mode === ThemeMode.Dark;

const isLight = (theme: Theme) => theme.mode === ThemeMode.Light;

export { isDark, isLight };
