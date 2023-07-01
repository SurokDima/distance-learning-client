import { Spin } from 'antd';
import { FC } from 'react';
import { RouterProvider as ReactRouteRoutesProvider } from 'react-router-dom';

import { useRouter } from '@/modules/common/providers/RouterProvider/hooks/useRouter';
import { IRouterProviderProps } from '@/modules/common/providers/RouterProvider/interfaces';

export const RouterProvider: FC<IRouterProviderProps> = ({
  routes,
  providers,
}) => {
  const router = useRouter(routes, providers);

  return (
    <ReactRouteRoutesProvider fallbackElement={<Spin />} router={router} />
  );
};
