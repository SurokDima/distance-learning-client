import { IModule } from '@/interfaces';
import { commonModuleProviders } from '@/modules/common/providers';

export const commonModule = {
  routes: [],
  providers: commonModuleProviders,
  reducers: {},
} satisfies IModule;
