import { useAuth0 } from '@auth0/auth0-react';
import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute: FC = () => {
  const { user } = useAuth0();
  if (user) return <Navigate to="/user/courses" />;
  return <Outlet />;
};
