import { IModule } from '@/interfaces';
import { LoginSuccessPage } from '@/modules/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/modules/auth/pages/LogoutSuccessPage';

export const authModule: IModule = {
  routes: [
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
  ],
};
