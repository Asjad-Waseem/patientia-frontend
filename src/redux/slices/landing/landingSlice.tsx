import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "redux/store";

export type landingState = {
  darkmode: boolean;
  language: string;
  callMessage: boolean;
};

const initialState: landingState = {
  darkmode: false,
  language: "English",
  callMessage: false,
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    updateDarkMode: (state) => {
      state.darkmode = !state.darkmode;
    },
    updateLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    updateCallMessage: (state, action: PayloadAction<boolean>) => {
      state.callMessage = action.payload;
    },
    clearResults() {
      // persistor.purge();
      // Note that this should be left intentionally empty.
      // Clearing redux state and localForage happens in rootReducer.ts.
    },
  },
});
export const {
  updateDarkMode,
  updateLanguage,
  updateCallMessage,
  clearResults,
} = landingSlice.actions;

export const darkMode = (state: RootState) => state.landing.darkmode;
export const language = (state: RootState) => state.landing.language;
export const callMessage = (state: RootState) => state.landing.callMessage;

export default landingSlice.reducer;
