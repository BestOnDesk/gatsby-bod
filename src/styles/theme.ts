export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export type ThemeModeType = ThemeMode.Light | ThemeMode.Dark;

const baseTheme: { [property: string]: any } = {};
const t = baseTheme;

t.colors.primary = "#3858F6";
t.colors.secondary = "#D93E40";
t.colors.secondaryAlt = "#F1352A";
t.colors.tertiary = "#050505";
t.colors.heading = "#000000";
t.colors.body = "#000000";
t.colors.gray = "#65676B";
t.colors.midgray = "#878787";
t.colors.light = "#E4E6EA";
t.colors.lighter = "#CED0D4";
t.colors.lightest = "#F0F2F5";
t.colors.border = "#E6E6E6";
t.colors.white = "#ffffff";
t.colors.success = "#3EB75E";
t.colors.danger = "#FF0003";
t.colors.warning = "#FF8F3C";
t.colors.info = "#1BA2DB";
t.colors.facebook = "#3B5997";
t.colors.twitter = "#1BA1F2";
t.colors.youtube = "#ED4141";
t.colors.linkedin = "#0077B5";
t.colors.pinterest = "#E60022";
t.colors.instagram = "#C231A1";
t.colors.vimeo = "#00ADEF";
t.colors.twitch = "#6441A3";
t.colors.discord = "#7289da";
t.colors.extra01 = "#666666";
t.colors.extra02 = "#606770";
t.colors.extra03 = "#FBFBFD";
t.colors.extra04 = "#1A1A1A";
t.colors.extra05 = "#242424";

t.borders.radius = "10px";
t.borders.radiusBig = "16px";
t.borders.radiusSmall = "6px";
t.borders.borderWidth = "2px";

t.shadows.primary = "0px 4px 10px rgba(37, 47, 63, 0.1)";
t.shadows.light = "0 2px 6px 0 rgba(0, 0, 0, 0.05)";
t.shadows.dark = "0 2px 6px 0 rgba(0, 0, 0, 0.2)";

t.animations.transition = "0.3s";

t.font.primary = "'Red Hat Display', sans-serif";
t.font.secondary = "'Red Hat Display', sans-serif";
t.font.fontAwesome = "'Font Awesome 5 Pro'";

t.font.height.b1 = "1.67";
t.font.height.b2 = "1.5";
t.font.height.b3 = "1.6";
t.font.height.b4 = "1.3";

t.font.size.b1 = "18px";
t.font.size.b2 = "16px";
t.font.size.b3 = "14px";
t.font.size.b4 = "12px";
t.font.size.h1 = "44px";
t.font.size.h2 = "36px";
t.font.size.h3 = "30px";
t.font.size.h4 = "24px";
t.font.size.h5 = "18px";
t.font.size.h6 = "16px";

t.font.weight.pLight = "300";
t.font.weight.pRegular = "400";
t.font.weight.pMedium = "500";
t.font.weight.pSemiBold = "600";
t.font.weight.pBold = "700";
t.font.weight.pExtraBold = "800";
t.font.weight.pBlack = "900";
t.font.weight.sLight = "300";
t.font.weight.sRegular = "400";
t.font.weight.sMedium = "500";
t.font.weight.sBold = "700";
t.font.weight.sBlack = "900";

t.layout.smlgDevice = "only screen and (max-width: 1199px)";
t.layout.extraDevice =
  "only screen and (min-width: 1600px) and (max-width: 1919px)";
t.layout.laptopDevice =
  "only screen and (min-width: 1200px) and (max-width: 1599px)";
t.layout.lgLayout =
  "only screen and (min-width: 992px) and (max-width: 1199px)";
t.layout.mdLayout = "only screen and (min-width: 768px) and (max-width: 991px)";
t.layout.smLayout = "only screen and (max-width: 767px)";
t.layout.largeMobile = "only screen and (max-width: 575px)";
t.layout.smallMobile = "only screen and (max-width: 479px)";

t.extends.listStyle = `
  padding: 0;
  margin: 0;
  list-style: none;
`;
t.extends.transition = `
  transition: ${t.animations.transition}
`;

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
