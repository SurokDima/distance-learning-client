import { Spin, theme } from 'antd';
import { FC, useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LoginSuccessPage } from '@/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/auth/pages/LogoutSuccessPage';
import { Auth0Provider } from '@/auth/providers/Auth0Provider';
import { LoginSuccessMessageProvider } from '@/auth/providers/LoginSuccessMessageProvider';
import { PrivateRoute } from '@/common/components/PrivateRoute';
import { MainLayout } from '@/common/layouts/MainLayout';
import { HomePage } from '@/common/pages/HomePage';
import { GlobalLoaderProvider } from '@/common/providers/GlobalLoaderProvider';
import { NotificationProvider } from '@/common/providers/NotificationProvider';
import { StoreProvider } from '@/common/providers/StoreProvider';
import { ThemeProvider } from '@/common/providers/ThemeProvider';
import { store } from '@/common/store';
import { getCourses } from '@/common/store/apis/own.api';
import { DashboardPage } from '@/user/pages/DashboardPage';

const Providers: FC = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <Providers />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/logoutSuccessful',
            element: <LogoutSuccessPage />,
          },
          {
            path: '/loginSuccessful',
            element: <LoginSuccessPage />,
          },
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/',
            element: <PrivateRoute />,
            children: [
              {
                path: '/dashboard',
                loader: () => {
                  if (!store.getState().auth.accessToken)
                    return Promise.resolve(null);

                  return store.dispatch(getCourses.initiate());
                },
                element: <DashboardPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App: FC = () => {
  const {
    token: { colorBgBase },
  } = theme.useToken();

  useEffect(() => {
    document.body.style.backgroundColor = colorBgBase;
  }, [colorBgBase]);

  useEffect(() => {
    const globalLoader =
      document.querySelector<HTMLDivElement>('.loaderContainer');
    if (!globalLoader) return;

    globalLoader.addEventListener('transitionend', () => {
      globalLoader.style.display = 'none';
    });

    setTimeout(() => (globalLoader.style.opacity = '0'));
  }, []);

  return <RouterProvider fallbackElement={<Spin />} router={router} />;
};

export default App;
