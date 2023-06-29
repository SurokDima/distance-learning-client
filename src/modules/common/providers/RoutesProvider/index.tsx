import { Spin } from 'antd';
import { FC, useMemo } from 'react';
import { RouterProvider as ReactRouteRoutesProvider } from 'react-router-dom';

import { IRouterProviderProps } from '@/modules/common/providers/RoutesProvider/interfaces';
import { createRouter } from '@/modules/common/providers/RoutesProvider/utils';

export const RouterProvider: FC<IRouterProviderProps> = ({ routes }) => {
  const router = useMemo(() => createRouter(routes), [routes]);

  return (
    <ReactRouteRoutesProvider fallbackElement={<Spin />} router={router} />
  );
};
