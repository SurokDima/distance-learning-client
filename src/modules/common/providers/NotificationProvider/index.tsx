import { notification } from 'antd';
import { FC } from 'react';

import { NotificationContext } from '@/modules/common/providers/NotificationProvider/context';
import { INotificationProviderProps } from '@/modules/common/providers/NotificationProvider/interfaces';

export const NotificationProvider: FC<INotificationProviderProps> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={api}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
