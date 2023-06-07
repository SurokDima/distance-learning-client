import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import { FC, createContext } from 'react';

import { INotificationProviderProps } from '@/common/providers/NotificationProvider/interfaces';

export const NotificationContext =
  createContext<NotificationInstance>(notification);

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
