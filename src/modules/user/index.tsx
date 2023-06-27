import { IModule } from '@/interfaces';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';
import { store } from '@/modules/common/store';
import { getCourses } from '@/modules/common/store/apis/own.api';

export const userModule: IModule = {
  routes: [
    {
      path: '/dashboard',
      errorElement: <ErrorPage />,
      authType: 'private',
      loader: () => {
        if (!store.getState().auth.accessToken) return Promise.resolve(null);

        return store.dispatch(getCourses.initiate());
      },
      lazy: async () => {
        const { DashboardPage } = await import(
          '@/modules/user/pages/DashboardPage'
        );

        return { Component: DashboardPage };
      },
    },
  ],
};
