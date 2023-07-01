import { IModule } from '@/modules/common/interfaces/module';
import { quizModuleRoutes } from '@/modules/quiz/routes';

export const quizModule = {
  routes: quizModuleRoutes,
  reducers: {},
} satisfies IModule;
