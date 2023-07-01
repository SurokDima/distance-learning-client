import { useAuth0 } from '@auth0/auth0-react';
import { Button, Result, Space, Spin } from 'antd';
import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

interface ILocationState {
  auth?: 'LOGIN' | 'LOGOUT';
}
// TODO move to auth
export const PrivateRoute: FC = () => {
  const { isLoading, loginWithRedirect, user } = useAuth0();
  const { pathname, state } = useLocation();
  const auth = (state as ILocationState | null)?.auth;

  if (auth === 'LOGOUT') return <Navigate to="/" replace />;

  if (isLoading)
    return (
      <div className={styles.loaderContainer}>
        <Spin size="large" />
      </div>
    );

  return !user ? (
    <div className={styles.loaderContainer}>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Space size="large">
            <Button
              type="primary"
              onClick={() =>
                loginWithRedirect({
                  appState: { returnTo: pathname },
                })
              }
              loading={isLoading}
            >
              Login
            </Button>
            <Button type="link">Back Home</Button>
          </Space>
        }
      />
    </div>
  ) : (
    <Outlet />
  );
};
