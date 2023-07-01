import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces/module';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';

export const quizModuleRoutes = [
  {
    path: '/quizzes/create',
    errorElement: <ErrorPage />,
    authType: RouteAuthType.PRIVATE,
    lazy: async () => {
      const { CreateQuizPage } = await import(
        '@/modules/quiz/pages/CreateQuizPage'
      );

      return { Component: CreateQuizPage };
    },
  },
] satisfies IRoute[];
