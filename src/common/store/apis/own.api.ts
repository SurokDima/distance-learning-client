import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICreateQuizBody } from '@/common/store/apis/interfaces/createQuizBody';
import { RootState } from '@/common/store/interfaces';
import { getEnvOrThrow } from '@/common/utils/getEnvOrThrow';
import { ICourse } from '@/course/interfaces';
import { IUser } from '@/user/interfaces';
export const ownApi = createApi({
  reducerPath: 'ownApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvOrThrow('VITE_OWN_API_URL'),
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => '/users/me',
    }),
    getCourses: builder.query<ICourse[], void>({
      query: () => '/users/me/courses',
    }),
    createQuiz: builder.mutation<{ id: string }, ICreateQuizBody>({
      query: (body) => ({
        url: '/quizzes',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetCoursesQuery,
  useCreateQuizMutation,
  endpoints: { getCourses },
} = ownApi;
