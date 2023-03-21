import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  initialLoad: false,
  darkMode: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setInitialLoadState: (state, action: PayloadAction<boolean>) => {
      state.initialLoad = action.payload;
    },
    setDarkModeState: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setLoadingState, setInitialLoadState, setDarkModeState } =
  appSlice.actions;

export const appReducer = appSlice.reducer;
