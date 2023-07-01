import { ReactNode, useMemo } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { IRoute } from '@/modules/common/interfaces/module';
import { PrivateRoute } from '@/modules/common/providers/RouterProvider/components/PrivateRoute';
import { Router } from '@/modules/common/providers/RouterProvider/interfaces';
import { sortRoutes } from '@/modules/common/providers/RouterProvider/utils';

import { MainLayout } from '../../../layouts/MainLayout/index';

export const useRouter = (routes: IRoute[], providers: ReactNode): Router => {
  // TODO add public routes
  const sortedRoutes = useMemo(() => sortRoutes(routes), [routes]);

  return useMemo(
    () =>
      createBrowserRouter([
        {
          element: providers,
          children: [
            {
              element: <MainLayout />,
              children: [
                ...sortedRoutes.commonRoutes,
                {
                  path: '/',
                  element: <PrivateRoute />,
                  children: sortedRoutes.privateRoutes,
                },
              ],
            },
          ],
        },
      ]),
    [sortedRoutes, providers]
  );
};
