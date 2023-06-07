import { useAuth0 } from '@auth0/auth0-react';
import { Button, Space } from 'antd';
import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import {
  useGetCoursesQuery,
  useGetUserQuery,
} from '@/common/store/apis/own.api';

export const DashboardPage: FC = () => {
  const { user, logout } = useAuth0();
  const { data, isLoading } = useGetUserQuery();
  const loaderData = useLoaderData();
  const { data: courses, isLoading: isCoursesLoading } = useGetCoursesQuery();

  console.log('LOADERDATA', loaderData);
  console.log('HOOK', courses, isCoursesLoading);
  console.log('USER', data, isLoading);

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
