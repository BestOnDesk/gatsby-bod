export interface IMobileState {
  showMenu: boolean;
}

const initialState = {
  showMenu: false,
};

export enum MobileActionType {
  ToggleMenu = "toggleMenu",
  OpenMenu = "openMenu",
  CloseMenu = "closeMenu",
}

interface IAction {
  type?: MobileActionType;
  payload?: unknown;
}

const reducer = (
  state: IMobileState = initialState,
  action: IAction = {}
): IMobileState => {
  const { type, payload } = action;

  switch (type) {
    case MobileActionType.ToggleMenu:
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    case MobileActionType.OpenMenu:
      return {
        ...state,
        showMenu: true,
      };
    case MobileActionType.CloseMenu:
      return {
        ...state,
        showMenu: false,
      };
    default:
      return state;
  }
};

export default reducer;
