import { ThemeMode } from "../app-types/style";

const isDark = (theme: any) => theme.mode === ThemeMode.Dark;

const isLight = (theme: any) => theme.mode === ThemeMode.Light;

export { isDark, isLight };
