import { UnionToIntersection } from '@reduxjs/toolkit/dist/tsHelpers';

import { IProvider, IRootModule, IRoute } from '@/interfaces';
import { authModule } from '@/modules/auth';
import { commonModule } from '@/modules/common';
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
  providers: IProvider[];
  reducers: UnionToIntersection<(typeof modules)[number]['reducers']>;
}>(
  (acc, module) => ({
    routes: [...acc.routes, ...(module.routes ?? [])],
    providers: [...acc.providers, ...(module.providers ?? [])],
    reducers: { ...acc.reducers, ...(module.reducers ?? {}) },
  }),
  {
    routes: [],
    providers: [],
    reducers: {} as any,
  }
) satisfies IRootModule;
