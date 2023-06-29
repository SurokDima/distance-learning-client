import { IRoute } from '@/interfaces';
import { LoginSuccessPage } from '@/modules/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/modules/auth/pages/LogoutSuccessPage';

export const authModuleRoutes = [
  {
    path: '/logoutSuccessful',
    element: <LogoutSuccessPage />,
    authType: 'common',
  },
  {
    path: '/loginSuccessful',
    element: <LoginSuccessPage />,
    authType: 'common',
  },
] satisfies IRoute[];
