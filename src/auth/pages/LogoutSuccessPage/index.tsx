import { Result, Button } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const LogoutSuccessPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Result
        status="success"
        title="Logout successful!"
        subTitle="You will be redirected automatically in a few seconds."
        extra={
          <Button type="link" onClick={() => navigate('/')}>
            Go Home
          </Button>
        }
      />
    </div>
  );
};
