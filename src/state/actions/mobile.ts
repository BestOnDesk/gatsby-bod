import { MobileActionType } from "../reducers/mobile";

export const toggleMenu = () => ({
  type: MobileActionType.ToggleMenu,
});

export const openMenu = () => ({
  type: MobileActionType.OpenMenu,
});

export const closeMenu = () => ({
  type: MobileActionType.CloseMenu,
});
