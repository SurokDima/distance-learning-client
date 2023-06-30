import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnvOrThrow } from '@/modules/common/utils/getEnvOrThrow';
import { RootState } from '@/store/interfaces';

export const api = createApi({
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
  endpoints: () => ({}),
});
