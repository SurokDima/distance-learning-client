import { IModule } from '@/interfaces';
import { courseModuleRoutes } from '@/modules/course/routes';

export const courseModule = {
  routes: courseModuleRoutes,
  providers: [],
  reducers: {},
} satisfies IModule;
