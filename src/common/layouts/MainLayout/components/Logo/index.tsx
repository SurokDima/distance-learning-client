import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const Logo: FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      Distance Learning
    </Link>
  );
};
