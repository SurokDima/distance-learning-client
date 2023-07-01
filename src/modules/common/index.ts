import { IModule } from '@/interfaces';
import { commonModuleProviders } from '@/modules/common/providers';

// TODO Remove providers system in modules

export const commonModule = {
  routes: [],
  providers: commonModuleProviders,
  reducers: {},
} satisfies IModule;
// TODO add barrel files
