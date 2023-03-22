import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'shared/Store/slices/app-slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: { app: appReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
