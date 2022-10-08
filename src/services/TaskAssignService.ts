import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ITaskAssign } from "models/ITaskAssign";
import { baseQuery } from "services/baseQuery";

export const taskAssignAPI = createApi({
  reducerPath: 'taskAssignAPI',
  baseQuery: baseQuery,
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
