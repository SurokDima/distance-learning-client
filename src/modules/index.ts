import { IModule, IRootModule } from '@/interfaces';
import { authModule } from '@/modules/auth';
import { commonModule } from '@/modules/common';
import { courseModule } from '@/modules/course';
import { quizModule } from '@/modules/quiz';
import { userModule } from '@/modules/user';

const modules: IModule[] = [
  authModule,
  commonModule,
  userModule,
  courseModule,
  quizModule,
];

export const rootModule = modules.reduce<IRootModule>(
  (acc, module) => ({
    routes: [...acc.routes, ...(module.routes ?? [])],
    providers: [...acc.providers, ...(module.providers ?? [])],
  }),
  {
    routes: [],
    providers: [],
  }
);
