import { combineReducers } from "redux";
import { PersistPartial } from "redux-persist/es/persistReducer";
import mobileReducer, { IMobileState } from "./mobile";
import notPersistedThemeReducer, { IThemeState } from "./theme";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "root",
  storage,
};

const themeReducer = persistReducer(persistConfig, notPersistedThemeReducer);

export default combineReducers({
  mobileReducer,
  themeReducer,
});

export interface IState {
  mobileReducer: IMobileState;
  themeReducer: IThemeState & PersistPartial;
}
