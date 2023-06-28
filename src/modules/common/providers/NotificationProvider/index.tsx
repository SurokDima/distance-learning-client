import { notification } from 'antd';
import { FC } from 'react';

import { NotificationContext } from '@/modules/common/providers/NotificationProvider/context';
import { INotificationProviderProps } from '@/modules/common/providers/NotificationProvider/interfaces';
import { useTheme } from '@/modules/common/providers/ThemeProvider/hooks';

export const NotificationProvider: FC<INotificationProviderProps> = ({
  children,
}) => {
  const theme = useTheme();
  const [api, contextHolder] = notification.useNotification();

  console.log(theme);

  return (
    <NotificationContext.Provider value={api}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
