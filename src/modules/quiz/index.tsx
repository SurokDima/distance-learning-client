import { IModule } from '@/interfaces';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';

export const quizModule = {
  routes: [
    {
      path: '/quizzes/create',
      errorElement: <ErrorPage />,
      authType: 'private',
      lazy: async () => {
        const { CreateQuizPage } = await import(
          '@/modules/quiz/pages/CreateQuizPage'
        );

        return { Component: CreateQuizPage };
      },
    },
  ],
  providers: [],
  reducers: {},
} satisfies IModule;
