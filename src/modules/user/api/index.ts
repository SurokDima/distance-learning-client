import { IUser } from '@/modules/user/interfaces';
import { api } from '@/store/api';

const extendedUserApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<IUser, void>({
      query: () => '/users/me',
    }),
  }),
});

export const { useGetUserQuery } = extendedUserApi;
