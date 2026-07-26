import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  userToken: string | null;
  isAuthenticated: boolean;
  isGuest: boolean;
  error: boolean;
}

const initialState: AuthState = {
  userToken: null,
  isAuthenticated: false,
  isGuest: true,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
      state.isAuthenticated = true;
      state.isGuest = false;
      state.error = false;
    },

    logout: (state) => {
      state.userToken = null;
      state.isAuthenticated = false;
      state.isGuest = true;
      state.error = false;

    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;