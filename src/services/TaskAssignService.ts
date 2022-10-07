import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "services/constants";
import { ITaskAssign } from "models/ITaskAssign";

export const taskAssignAPI = createApi({
  reducerPath: 'taskAssignAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['TaskAssign'],
  endpoints: (build) => ({
    fetchAllTaskAssigns: build.query<ITaskAssign[], void>({
      query: () => ({
        url: `/taskAssign`,
      }),
      providesTags: result => ['TaskAssign']
    }),
    updateTaskAssign: build.mutation<ITaskAssign, ITaskAssign>({
      query: (post) => ({
        url: `/taskAssign/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['TaskAssign']
    }),
    deleteTask: build.mutation<ITaskAssign, ITaskAssign>({
      query: (post) => ({
        url: `/taskAssign/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TaskAssign']
    }),
  })
})
