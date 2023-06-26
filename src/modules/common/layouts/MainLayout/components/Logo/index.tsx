import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ILogoProps } from '@/modules/common/layouts/MainLayout/components/Logo/interfaces';

import styles from './styles.module.scss';

export const Logo: FC<ILogoProps> = ({ form = 'short' }) => {
  return (
    <Link
      to="/"
      className={classNames({
        [styles.logo]: true,
        [styles.short]: form === 'short',
        [styles.long]: form === 'long',
      })}
    >
      {form === 'short' ? 'DL' : 'Distance Learning'}
    </Link>
  );
};
