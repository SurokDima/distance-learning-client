import { useAuth0 } from '@auth0/auth0-react';
import { Button, Space } from 'antd';
import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { useGetUserQuery } from '@/common/store/apis/own.api';

export const DashboardPage: FC = () => {
  const { user, logout } = useAuth0();
  const { data, isLoading } = useGetUserQuery();
  const datas = useLoaderData();

  console.log(datas);
  console.log(data, isLoading);

  return (
    <Space direction="vertical">
      <div>User name: {user?.given_name}</div>
      <Button
        type="primary"
        onClick={() =>
          logout({
            logoutParams: {
              st: 'sdf',
              returnTo: 'http://localhost:5173/logoutSuccessful',
            },
          })
        }
      >
        Logout
      </Button>
    </Space>
  );
};
