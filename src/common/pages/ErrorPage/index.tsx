import { Button, Result } from 'antd';
import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const ErrorPageView: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Result
        status="error"
        title="Something went wrong!"
        subTitle="Try reload the page or come back later."
        extra={
          <Button type="link" onClick={() => navigate('/')}>
            Go Home
          </Button>
        }
      />
    </div>
  );
};

export const ErrorPage: FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorPageView />}>
      <Outlet />
    </ErrorBoundary>
  );
};
