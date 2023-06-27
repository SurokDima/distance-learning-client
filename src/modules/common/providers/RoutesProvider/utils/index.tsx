import { FC } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import { IRoute } from '@/interfaces';
import { Auth0Provider } from '@/modules/auth/providers/Auth0Provider';
import { LoginSuccessMessageProvider } from '@/modules/auth/providers/LoginSuccessMessageProvider';
import { PrivateRoute } from '@/modules/common/components/PrivateRoute';
import { MainLayout } from '@/modules/common/layouts/MainLayout';
import { BodyBgColorProvider } from '@/modules/common/providers/BodyBgColorProvider';
import { GlobalLoaderProvider } from '@/modules/common/providers/GlobalLoaderProvider';
import { InitialLoaderProvider } from '@/modules/common/providers/InitialLoaderProvider';
import { NotificationProvider } from '@/modules/common/providers/NotificationProvider';
import {
  ISortedRoutes,
  Router,
} from '@/modules/common/providers/RoutesProvider/interfaces';
import { StoreProvider } from '@/modules/common/providers/StoreProvider';
import { ThemeProvider } from '@/modules/common/providers/ThemeProvider';

const Providers: FC = () => {
  return (
    <InitialLoaderProvider>
      <ThemeProvider>
        <BodyBgColorProvider>
          <GlobalLoaderProvider>
            <NotificationProvider>
              <Auth0Provider>
                <StoreProvider>
                  <LoginSuccessMessageProvider>
                    <Outlet />
                  </LoginSuccessMessageProvider>
                </StoreProvider>
              </Auth0Provider>
            </NotificationProvider>
          </GlobalLoaderProvider>
        </BodyBgColorProvider>
      </ThemeProvider>
    </InitialLoaderProvider>
  );
};

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
      element: <Providers />,
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
