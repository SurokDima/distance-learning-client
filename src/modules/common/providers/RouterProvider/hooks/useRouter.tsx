import { ComponentType, ReactNode, useMemo } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces/module';
import { PrivateRoute } from '@/modules/common/providers/RouterProvider/components/PrivateRoute';
import { PublicRoute } from '@/modules/common/providers/RouterProvider/components/PublicRoute';
import {
  SortedRoutes,
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
    }, new Map<ComponentType, SortedRoutes>());
  }, [routesByLayout]);

  return useMemo(
    () =>
      createBrowserRouter([
        {
          element: providers,
          children: [...sortedRoutes.entries()].map(([Layout, routes]) => ({
            element: <Layout />,
            children: Object.entries(routes).reduce<RouteObject[]>(
              (acc, [authType, routes]) => {
                const authType_ = authType as RouteAuthType;
                return [...acc, ...routesAttachers[authType_](routes)];
              },
              []
            ),
          })),
        },
      ]),
    [sortedRoutes, providers]
  );
};

const routesAttachers: {
  [key in RouteAuthType]: (routes: IRoute[]) => RouteObject[];
} = {
  [RouteAuthType.COMMON]: (routes) => routes,
  [RouteAuthType.PRIVATE]: (routes) => [
    {
      path: '/',
      element: <PrivateRoute />,
      children: routes,
    },
  ],
  [RouteAuthType.PUBLIC]: (routes) => [
    {
      path: '/',
      element: <PublicRoute />,
      children: routes,
    },
  ],
};
