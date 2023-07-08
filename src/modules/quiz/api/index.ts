import { IQuiz } from '@/modules/quiz/api/interfaces';
import { ICreateQuizBody } from '@/modules/quiz/api/interfaces/createQuizBody';
import { api } from '@/store/api';

const extendedQuizApi = api.injectEndpoints({
  endpoints: (build) => ({
    getQuiz: build.query<IQuiz, string>({
      query: (id) => `/quizzes/${id}`,
    }),
    createQuiz: build.mutation<{ id: string }, ICreateQuizBody>({
      query: (body) => ({
        url: '/quizzes',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateQuizMutation, useGetQuizQuery } = extendedQuizApi;
