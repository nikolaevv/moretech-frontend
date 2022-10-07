import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IStat } from "models/IStat";
import { BASE_URL } from "services/constants";

export const statAPI = createApi({
  reducerPath: 'stat',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['StatItem'],
  endpoints: (build) => ({
    fetchAllNftItems: build.query<IStat, void>({
      query: () => ({
        url: `/stat`
      }),
    }),
  })
})
