import { Skeleton } from 'antd';
import { FC } from 'react';

import styles from './styles.module.scss';

export const UserSkeleton: FC = () => {
  return (
    <div className={styles.container}>
      <Skeleton.Avatar size="large" active style={{ display: 'flex' }} />
      <Skeleton.Input active size="small" style={{ display: 'flex' }} />
    </div>
  );
};
