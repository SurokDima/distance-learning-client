import { LoginSuccessPage } from '@/modules/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/modules/auth/pages/LogoutSuccessPage';
import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces/module';

export const authModuleRoutes = [
  {
    path: '/logoutSuccessful',
    element: <LogoutSuccessPage />,
    authType: RouteAuthType.COMMON,
  },
  {
    path: '/loginSuccessful',
    element: <LoginSuccessPage />,
    authType: RouteAuthType.COMMON,
  },
] satisfies IRoute[];
