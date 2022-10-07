import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IShopItem } from "models/IShopItem";
import { BASE_URL } from "services/constants";

export const shopItemAPI = createApi({
  reducerPath: 'shopAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
