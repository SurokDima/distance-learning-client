import { Spin } from 'antd';
import { FC } from 'react';
import { RouterProvider as ReactRouteRoutesProvider } from 'react-router-dom';

import { useRouter } from './hooks';
import { IRouterProviderProps } from './interfaces';

export const RouterProvider: FC<IRouterProviderProps> = ({
  routes,
  providers,
}) => {
  const router = useRouter(routes, providers);

  return (
    <ReactRouteRoutesProvider fallbackElement={<Spin />} router={router} />
  );
};
