import { ThemeMode } from "../../app-types/style";

export interface IThemeState {
  themeMode: ThemeMode;
}

const initialState = {
  themeMode: ThemeMode.Light,
};

export enum ThemeActionType {
  ToggleTheme = "toggleTheme",
}

interface IAction {
  type?: ThemeActionType;
  payload?: unknown;
}

const reducer = (
  state: IThemeState = initialState,
  action: IAction = {}
): IThemeState => {
  const { type, payload } = action;

  switch (type) {
    case ThemeActionType.ToggleTheme:
      return {
        ...state,
        themeMode:
          state.themeMode === ThemeMode.Light
            ? ThemeMode.Dark
            : ThemeMode.Light,
      };
    default:
      return state;
  }
};

export default reducer;
