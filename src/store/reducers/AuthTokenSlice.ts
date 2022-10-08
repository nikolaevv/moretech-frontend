import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthTokenState {
  token: string | undefined;
}

const initialState: AuthTokenState = {
  token: undefined
}

export const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = undefined
    },
  }
})

export const { login, logout } = authTokenSlice.actions

export default authTokenSlice.reducer;
