import { ownApi } from '@/modules/common/store/api/own.api';
import { IUser } from '@/modules/user/interfaces';

const extendedUserApi = ownApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<IUser, void>({
      query: () => '/users/me',
    }),
  }),
});

export const { useGetUserQuery } = extendedUserApi;
