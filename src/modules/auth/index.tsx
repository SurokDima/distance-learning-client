import { IModule } from '@/interfaces';
import { authModuleProviders } from '@/modules/auth/providers';
import { authModuleRoutes } from '@/modules/auth/routes';
import { authModuleReducers } from '@/modules/auth/store';

export const authModule = {
  routes: authModuleRoutes,
  providers: authModuleProviders,
  reducers: authModuleReducers,
} satisfies IModule;
