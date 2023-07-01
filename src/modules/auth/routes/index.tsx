import { LoginSuccessPage } from '@/modules/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/modules/auth/pages/LogoutSuccessPage';
import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces/module';
import { MainLayout } from '@/modules/common/layouts/MainLayout';

export const authModuleRoutes = [
  {
    path: '/logoutSuccessful',
    element: <LogoutSuccessPage />,
    layout: MainLayout,
    authType: RouteAuthType.COMMON,
  },
  {
    path: '/loginSuccessful',
    element: <LoginSuccessPage />,
    layout: MainLayout,
    authType: RouteAuthType.COMMON,
  },
] satisfies IRoute[];
