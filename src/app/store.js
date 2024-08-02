import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import { navbarSlice } from "../features/Navbar/NavbarSlice";

const rootReducer = combineSlices(navbarSlice);

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
