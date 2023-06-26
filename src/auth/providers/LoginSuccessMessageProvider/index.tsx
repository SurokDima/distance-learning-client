import { FC, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useNotification } from '@/common/providers/NotificationProvider/hooks';

interface ILocationState {
  auth?: 'LOGIN' | 'LOGOUT';
}

export const LoginSuccessMessageProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const location = useLocation();
  const state = location.state as ILocationState;
  const navigate = useNavigate();
  const api = useNotification();

  const authParam = state?.auth;

  useEffect(() => {
    if (authParam !== 'LOGIN') return;

    api.success({
      message: 'Login successful!',
    });

    // TODO improve that
    navigate(window.location.pathname, { replace: true });
  }, [api, authParam, navigate]);

  return <>{children}</>;
};
