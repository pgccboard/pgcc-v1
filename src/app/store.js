import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";

const rootReducer = combineSlices();

export const makeStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
  });
  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();
