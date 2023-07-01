import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces/module';
import { MainLayout } from '@/modules/common/layouts/MainLayout';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';

export const quizModuleRoutes = [
  {
    path: '/quizzes/create',
    errorElement: <ErrorPage />,
    authType: RouteAuthType.PRIVATE,
    layout: MainLayout,
    lazy: async () => {
      const { CreateQuizPage } = await import(
        '@/modules/quiz/pages/CreateQuizPage'
      );

      return { Component: CreateQuizPage };
    },
  },
] satisfies IRoute[];
