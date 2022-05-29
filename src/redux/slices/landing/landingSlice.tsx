import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "redux/store";

// interface userInfoProps {
//   userData: object[];
// }

export type landingState = {
  darkmode: boolean;
  language: string;
  callMessage: boolean;
  userInfo: Array<any>;
  userCallUpInfo: Array<any>;
};

const initialState: landingState = {
  darkmode: false,
  language: "English",
  callMessage: false,
  userInfo: [],
  userCallUpInfo: []
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
    updateUserInfo: (state, action: PayloadAction<Array<any>>) => {
      state.userInfo = action.payload;
    },
    updateUserCallUpInfo: (state, action: PayloadAction<Array<any>>) => {
      state.userCallUpInfo = action.payload;
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
  updateUserInfo,
  updateUserCallUpInfo,
  updateCallMessage,
  clearResults,
} = landingSlice.actions;

export const darkMode = (state: RootState) => state.landing.darkmode;
export const language = (state: RootState) => state.landing.language;
export const userInfo = (state: RootState) => state.landing.userInfo;
export const userCallUpInfo = (state: RootState) => state.landing.userCallUpInfo;
export const callMessage = (state: RootState) => state.landing.callMessage;

export default landingSlice.reducer;
