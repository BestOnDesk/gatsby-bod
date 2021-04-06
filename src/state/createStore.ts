import { createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers, { IState } from "./reducers";

export default (preloadedState: IState) => {
  const store = createStore(reducers, preloadedState);
  const persistor = persistStore(store);
  return { store, persistor };
};
