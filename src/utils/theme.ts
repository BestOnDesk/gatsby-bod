import { Theme, ThemeVariation } from "../styles/theme";

const isDark = (theme: Theme) => theme.variation === ThemeVariation.Dark;

const isLight = (theme: Theme) => theme.variation === ThemeVariation.Light;

export { isDark, isLight };
