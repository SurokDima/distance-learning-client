import { createBrowserRouter } from 'react-router-dom';

import { IRoute } from '@/interfaces';
import { rootModule } from '@/modules';
import { PrivateRoute } from '@/modules/common/components/PrivateRoute';
import { MainLayout } from '@/modules/common/layouts/MainLayout';
import { ProvidersProvider } from '@/modules/common/providers/ProvidersProvider';
import {
  ISortedRoutes,
  Router,
} from '@/modules/common/providers/RoutesProvider/interfaces';

const sortRoutes = (routes: IRoute[]): ISortedRoutes => {
  return routes.reduce<ISortedRoutes>(
    (acc, route) => {
      if (route.authType === 'common')
        return { ...acc, commonRoutes: [...acc.commonRoutes, route] };

      if (route.authType === 'private')
        return { ...acc, privateRoutes: [...acc.privateRoutes, route] };

      return { ...acc, publicRoutes: [...acc.publicRoutes, route] };
    },
    {
      commonRoutes: [],
      privateRoutes: [],
      publicRoutes: [],
    }
  );
};

export const createRouter = (routes: IRoute[]): Router => {
  // TODO add public routes
  const { commonRoutes, privateRoutes } = sortRoutes(routes);

  return createBrowserRouter([
    {
      element: <ProvidersProvider providers={rootModule.providers} />,
      children: [
        {
          element: <MainLayout />,
          children: [
            ...commonRoutes,
            {
              path: '/',
              element: <PrivateRoute />,
              children: privateRoutes,
            },
          ],
        },
      ],
    },
  ]);
};
