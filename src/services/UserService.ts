import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "models/IUser";
import { IQuery } from "models/IQuery";
import { ITransaction } from "models/ITransaction";
import { baseQuery } from "./baseQuery";

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: (build) => ({
    fetchUsersByQuery: build.query<IUser[], IQuery>({
      query: (query: IQuery) => ({
        url: `/user`,
        params: query
      }),
      providesTags: result => ['User']
    }),
    fetchUser: build.query<IUser, number>({
      query: (id: number) => ({
        url: `/user/${id}`,
      }),
      providesTags: result => ['User']
    }),
    fetchUserTransactions: build.query<ITransaction[], number>({
      query: (id: number) => ({
        url: `/user/${id}/transaction`,
      }),
      providesTags: result => ['User']
    }),
  })
})
