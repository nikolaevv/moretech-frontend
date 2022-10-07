import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "services/constants";
import { ITask } from "models/ITask";

export const taskAPI = createApi({
  reducerPath: 'taskAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
