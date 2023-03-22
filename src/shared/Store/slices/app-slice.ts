import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'dark' | 'light';

type AppStateType = {
  initialLoad: boolean;
  loading: boolean;
  theme: ThemeType;
};

const initialState: AppStateType = {
  initialLoad: false,
  loading: false,
  theme: 'dark',
};

const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setInitialLoadState: (state, action: PayloadAction<boolean>) => {
      state.initialLoad = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setThemeState: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const { setInitialLoadState, setLoadingState, setThemeState } = actions;

export const appReducer = reducer;
