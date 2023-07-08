import { authModuleRoutes } from '@/modules/auth/routes';
import { authModuleReducers } from '@/modules/auth/store';
import { IModule } from '@/modules/common/interfaces';

export const authModule = {
  routes: authModuleRoutes,
  reducers: authModuleReducers,
} satisfies IModule;
