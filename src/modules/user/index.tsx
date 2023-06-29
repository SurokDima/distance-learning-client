import { IModule } from '@/interfaces';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';

export const userModule = {
  routes: [
    {
      path: '/dashboard',
      errorElement: <ErrorPage />,
      authType: 'private',
      // TODO fix or remove
      // loader: (): Promise<ICourse[] | null> => {
      //   if (!store.getState().auth.accessToken) return Promise.resolve(null);

      //   return store.dispatch(getCourses.initiate()) as any;
      // },
      lazy: async () => {
        const { DashboardPage } = await import(
          '@/modules/user/pages/DashboardPage'
        );

        return { Component: DashboardPage };
      },
    },
  ],
  providers: [],
  reducers: {},
} satisfies IModule;
