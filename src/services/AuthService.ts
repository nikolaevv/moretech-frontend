import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAuth } from "models/IAuth";
import { BASE_URL } from "services/constants";

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    createPost: build.mutation<IAuth, IAuth>({
      query: (post) => ({
        url: `/auth`,
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Auth']
    }),
  })
})
