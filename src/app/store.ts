import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "@app/slices/app-slice";

export const store = configureStore({
  reducer: { app: appReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
