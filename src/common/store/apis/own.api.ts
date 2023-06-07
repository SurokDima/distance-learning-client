import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/common/store/interfaces';
import { getEnvOrThrow } from '@/common/utils/getEnvOrThrow';
import { IUser } from '@/user/interfaces';

// TODO move it
interface ICourse {
  id: string;
  name: string;
  author: IUser;
}

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
  }),
});

export const {
  useGetUserQuery,
  useGetCoursesQuery,
  endpoints: { getCourses },
} = ownApi;
