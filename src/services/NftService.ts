import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INftItem } from "models/INftItem";
import { BASE_URL } from "services/constants";

export const nftItemAPI = createApi({
  reducerPath: 'nftAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['NftItem'],
  endpoints: (build) => ({
    fetchAllNftItems: build.query<INftItem[], void>({
      query: () => ({
        url: `/nftItem`
      }),
    }),
    putNftItem: build.mutation<INftItem, INftItem>({
      query: (item: INftItem) => ({
        url: `/nftItem/${item.id}/transfer`,
        method: 'PUT',
        body: item
      }),
      invalidatesTags: ['NftItem']
    }),
  })
})
