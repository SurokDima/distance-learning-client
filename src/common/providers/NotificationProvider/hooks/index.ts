import { NotificationInstance } from 'antd/es/notification/interface';
import { useContext } from 'react';

import { NotificationContext } from '@/common/providers/NotificationProvider/context';

export const useNotification = (): NotificationInstance => {
  return useContext(NotificationContext);
};
