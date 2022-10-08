import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUserToken } from "models/IUserToken";

interface AuthTokenState {
  token: string | undefined;
  id: number | undefined;
}

const initialState: AuthTokenState = {
  token: undefined,
  id: undefined,
}

export const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserToken>) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.id = undefined;
      state.token = undefined;
    },
  }
})

export const { login, logout } = authTokenSlice.actions

export default authTokenSlice.reducer;
