import { notification } from 'antd';
import { FC, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ILocationState {
  auth?: 'LOGIN' | 'LOGOUT';
}

export const LoginSuccessMessageProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const location = useLocation();
  const state = location.state as ILocationState;
  const navigate = useNavigate();

  const authParam = state?.auth;

  useEffect(() => {
    if (authParam !== 'LOGIN') return;

    notification.success({
      message: 'Login successful!',
    });

    // TODO improve that
    navigate(window.location.pathname, { replace: true });
  }, [authParam, navigate]);

  return <>{children}</>;
};
