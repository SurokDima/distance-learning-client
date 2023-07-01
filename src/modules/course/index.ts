import { IModule } from '@/modules/common/interfaces/module';
import { courseModuleRoutes } from '@/modules/course/routes';

export const courseModule = {
  routes: courseModuleRoutes,
  reducers: {},
} satisfies IModule;
