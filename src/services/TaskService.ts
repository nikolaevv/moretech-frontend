import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ITask } from "models/ITask";
import { baseQuery } from "./baseQuery";

export const taskAPI = createApi({
  reducerPath: 'taskAPI',
  baseQuery: baseQuery,
  tagTypes: ['Task'],
  endpoints: (build) => ({
    fetchAllTasks: build.query<ITask[], number>({
      query: (limit: number = 5) => ({
        url: `/task`,
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Task']
    }),
    createTask: build.mutation<ITask, ITask>({
      query: (post) => ({
        url: `/task`,
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Task']
    }),
    updateTask: build.mutation<ITask, ITask>({
      query: (post) => ({
        url: `/task/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Task']
    }),
    deleteTask: build.mutation<ITask, ITask>({
      query: (post) => ({
        url: `/task/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task']
    }),
  })
})
