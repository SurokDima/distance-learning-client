import { NotificationProvider } from '@/modules/common/providers/NotificationProvider';

import { LoginSuccessMessageProvider } from './LoginSuccessMessageProvider';

export const authModuleProviders = [
  {
    component: LoginSuccessMessageProvider,
    dependsOn: [NotificationProvider],
  },
];
