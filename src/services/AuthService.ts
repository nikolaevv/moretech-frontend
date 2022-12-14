import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAuth } from "models/IAuth";
import { IUserToken } from "models/IUserToken";
import { BASE_URL } from "services/constants";

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL
  }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    auth: build.mutation<IUserToken, IAuth>({
      query: (post) => ({
        url: `/auth`,
        method: 'POST',
        params: post
      }),
      invalidatesTags: ['Auth']
    }),
  })
})
