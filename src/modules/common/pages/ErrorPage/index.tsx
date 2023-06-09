import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const ErrorPage: FC = () => {
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
