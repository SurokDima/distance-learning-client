import { ownApi } from '@/store/api';
import { ICreateQuizBody } from '@/modules/quiz/api/interfaces';

const extendedQuizApi = ownApi.injectEndpoints({
  endpoints: (build) => ({
    createQuiz: build.mutation<{ id: string }, ICreateQuizBody>({
      query: (body) => ({
        url: '/quizzes',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateQuizMutation } = extendedQuizApi;
