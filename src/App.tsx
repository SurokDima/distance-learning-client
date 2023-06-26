import { Spin } from 'antd';
import { FC, useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LoginSuccessPage } from '@/modules/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/modules/auth/pages/LogoutSuccessPage';
import { Auth0Provider } from '@/modules/auth/providers/Auth0Provider';
import { LoginSuccessMessageProvider } from '@/modules/auth/providers/LoginSuccessMessageProvider';
import { PrivateRoute } from '@/modules/common/components/PrivateRoute';
import { MainLayout } from '@/modules/common/layouts/MainLayout';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';
import { BodyBgColorProvider } from '@/modules/common/providers/BodyBgColorProvider';
import { GlobalLoaderProvider } from '@/modules/common/providers/GlobalLoaderProvider';
import { NotificationProvider } from '@/modules/common/providers/NotificationProvider';
import { StoreProvider } from '@/modules/common/providers/StoreProvider';
import { ThemeProvider } from '@/modules/common/providers/ThemeProvider';
import { store } from '@/modules/common/store';
import { getCourses } from '@/modules/common/store/apis/own.api';

const Providers: FC = () => {
  return (
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
            lazy: async () => {
              const { HomePage } = await import(
                '@/modules/common/pages/HomePage'
              );
              return { Component: HomePage };
            },
          },
          {
            path: '/',
            element: <PrivateRoute />,
            children: [
              {
                path: '/dashboard',
                errorElement: <ErrorPage />,

                loader: () => {
                  if (!store.getState().auth.accessToken)
                    return Promise.resolve(null);

                  return store.dispatch(getCourses.initiate());
                },
                lazy: async () => {
                  const { DashboardPage } = await import(
                    '@/modules/user/pages/DashboardPage'
                  );

                  return { Component: DashboardPage };
                },
              },
              {
                path: '/quizzes/create',
                errorElement: <ErrorPage />,
                lazy: async () => {
                  const { CreateQuizPage } = await import(
                    '@/modules/quiz/pages/CreateQuizPage'
                  );

                  return { Component: CreateQuizPage };
                },
              },
              // {
              //   path: '/users/me/courses/:id',
              //   element: <CoursePage />,
              //   loader: () => {
              //     if (!store.getState().auth.accessToken)
              //       return Promise.resolve(null);

              //     return store.dispatch(getCourse.initiate());
              //   },
              // },
            ],
          },
        ],
      },
    ],
  },
]);

const App: FC = () => {
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
