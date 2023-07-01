import { ComponentType, ReactNode, useMemo } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { IRoute } from '@/modules/common/interfaces/module';
import { PrivateRoute } from '@/modules/common/providers/RouterProvider/components/PrivateRoute';
import { PublicRoute } from '@/modules/common/providers/RouterProvider/components/PublicRoute';
import {
  ISortedRoutes,
  Router,
} from '@/modules/common/providers/RouterProvider/interfaces';
import { sortRoutesByAuthType } from '@/modules/common/providers/RouterProvider/utils/sortRoutesByAuthType';
import { sortRoutesByLayout } from '@/modules/common/providers/RouterProvider/utils/sortRoutesByLayout';

export const useRouter = (routes: IRoute[], providers: ReactNode): Router => {
  const routesByLayout = useMemo(() => sortRoutesByLayout(routes), [routes]);

  const sortedRoutes = useMemo(() => {
    const entries = routesByLayout.entries();

    return [...entries].reduce((acc, [layout, routes]) => {
      acc.set(layout, sortRoutesByAuthType(routes));
      return acc;
    }, new Map<ComponentType, ISortedRoutes>());
  }, [routesByLayout]);

  return useMemo(
    () =>
      createBrowserRouter([
        {
          element: providers,
          children: [...sortedRoutes.entries()].map(([Layout, routes]) => ({
            element: <Layout />,
            children: [
              ...routes.commonRoutes,
              {
                path: '/',
                element: <PrivateRoute />,
                children: routes.privateRoutes,
              },
              {
                path: '/',
                element: <PublicRoute />,
                children: routes.publicRoutes,
              },
            ],
          })),
        },
      ]),
    [sortedRoutes, providers]
  );
};
