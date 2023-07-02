import { UnionToIntersection } from '@reduxjs/toolkit/dist/tsHelpers';

import { authModule } from '@/modules/auth';
import { commonModule } from '@/modules/common';
import { IRootModule, IRoute } from '@/modules/common/interfaces';
import { courseModule } from '@/modules/course';
import { quizModule } from '@/modules/quiz';
import { userModule } from '@/modules/user';

const modules = [
  authModule,
  commonModule,
  userModule,
  courseModule,
  quizModule,
] as const;

export const rootModule = modules.reduce<{
  routes: IRoute[];
  reducers: UnionToIntersection<(typeof modules)[number]['reducers']>;
}>(
  (acc, module) => ({
    routes: [...acc.routes, ...(module.routes ?? [])],
    reducers: { ...acc.reducers, ...(module.reducers ?? {}) },
  }),
  {
    routes: [],
    reducers: {} as any,
  }
) satisfies IRootModule;
