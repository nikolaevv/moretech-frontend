import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IStat } from "models/IStat";
import { baseQuery } from "services/baseQuery";

export const statAPI = createApi({
  reducerPath: 'stat',
  baseQuery: baseQuery,
  tagTypes: ['StatItem'],
  endpoints: (build) => ({
    fetchAllNftItems: build.query<IStat, void>({
      query: () => ({
        url: `/stat`
      }),
    }),
  })
})
