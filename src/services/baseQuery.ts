import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RootState } from "store/store";
import { BASE_URL } from "./constants";

export const baseQuery = fetchBaseQuery({ 
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authToken.token
    
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
});
