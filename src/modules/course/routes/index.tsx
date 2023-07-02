import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces';
import { MainLayout } from '@/modules/common/layouts';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';

export const courseModuleRoutes = [
  {
    path: '/user/courses',
    errorElement: <ErrorPage />,
    authType: RouteAuthType.PRIVATE,
    layout: MainLayout,
    lazy: async () => {
      const { UserCoursesListPage } = await import(
        '@/modules/course/pages/UserCoursesListPage'
      );

      return { Component: UserCoursesListPage };
    },
  },
] satisfies IRoute[];
