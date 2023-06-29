import { IModule } from '@/interfaces';
import { quizModuleRoutes } from '@/modules/quiz/routes';

export const quizModule = {
  routes: quizModuleRoutes,
  providers: [],
  reducers: {},
} satisfies IModule;
