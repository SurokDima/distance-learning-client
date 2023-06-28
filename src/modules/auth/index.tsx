import { IModule } from '@/interfaces';
import { LoginSuccessPage } from '@/modules/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/modules/auth/pages/LogoutSuccessPage';
import { Auth0Provider } from '@/modules/auth/providers/Auth0Provider';
import { LoginSuccessMessageProvider } from '@/modules/auth/providers/LoginSuccessMessageProvider';
import { NotificationProvider } from '@/modules/common/providers/NotificationProvider';

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
  providers: [
    {
      component: Auth0Provider,
      dependsOn: [],
    },
    {
      component: LoginSuccessMessageProvider,
      dependsOn: [NotificationProvider],
    },
  ],
};
