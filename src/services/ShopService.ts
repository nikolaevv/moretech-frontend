import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IShopItem } from "models/IShopItem";
import { baseQuery } from "services/baseQuery";

export const shopItemAPI = createApi({
  reducerPath: 'shopAPI',
  baseQuery: baseQuery,
  tagTypes: ['ShopItem'],
  endpoints: (build) => ({
    fetchAllShopItems: build.query<IShopItem[], void>({
      query: () => ({
        url: `/shopItem`
      }),
    }),
    buyShopItem: build.mutation<IShopItem, IShopItem>({
      query: (item: IShopItem) => ({
        url: `/shopItem/${item.id}/buy`,
        method: 'POST',
        body: item
      }),
      invalidatesTags: ['ShopItem']
    }),
  })
})
