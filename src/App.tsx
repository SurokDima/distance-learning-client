import { Spin } from 'antd';
import { FC, useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LoginSuccessPage } from '@/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/auth/pages/LogoutSuccessPage';
import { Auth0Provider } from '@/auth/providers/Auth0Provider';
import { LoginSuccessMessageProvider } from '@/auth/providers/LoginSuccessMessageProvider';
import { PrivateRoute } from '@/common/components/PrivateRoute';
import { MainLayout } from '@/common/layouts/MainLayout';
import { ErrorPage } from '@/common/pages/ErrorPage';
import { BodyBgColorProvider } from '@/common/providers/BodyBgColorProvider';
import { GlobalLoaderProvider } from '@/common/providers/GlobalLoaderProvider';
import { NotificationProvider } from '@/common/providers/NotificationProvider';
import { StoreProvider } from '@/common/providers/StoreProvider';
import { ThemeProvider } from '@/common/providers/ThemeProvider';
import { store } from '@/common/store';
import { getCourses } from '@/common/store/apis/own.api';

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
              const { HomePage } = await import('@/common/pages/HomePage');
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
                    '@/user/pages/DashboardPage'
                  );

                  return { Component: DashboardPage };
                },
              },
              {
                path: '/quizzes/create',
                errorElement: <ErrorPage />,
                lazy: async () => {
                  const { CreateQuizPage } = await import(
                    '@/quiz/pages/CreateQuizPage'
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
