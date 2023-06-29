import { IRoute } from '@/interfaces';
import { ErrorPage } from '@/modules/common/pages/ErrorPage';

export const courseModuleRoutes = [
  {
    path: '/user/courses',
    errorElement: <ErrorPage />,
    authType: 'private',
    lazy: async () => {
      const { UserCoursesPage } = await import(
        '@/modules/course/pages/UserCoursesListPage'
      );

      return { Component: UserCoursesPage };
    },
  },
] satisfies IRoute[];