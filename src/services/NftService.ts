import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { INftItem } from "models/INftItem";
import { baseQuery } from "services/baseQuery";

export const nftItemAPI = createApi({
  reducerPath: 'nftAPI',
  baseQuery: baseQuery,
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
