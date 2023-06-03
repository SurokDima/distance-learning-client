import {
  AppState,
  Auth0Provider as OriginalAuth0Provider,
} from '@auth0/auth0-react';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { getEnvOrThrow } from '@/common/utils/getEnvOrThrow';

const AUTH0_DOMAIN = getEnvOrThrow('VITE_AUTH0_DOMAIN');
const AUTH0_CLIENT_ID = getEnvOrThrow('VITE_AUTH0_CLIENT_ID');
const AUTH0_AUDIENCE = getEnvOrThrow('VITE_AUTH0_AUDIENCE');

export const Auth0Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState): void => {
    if (!appState?.returnTo) return;

    navigate(appState.returnTo, {
      state: {
        auth: 'LOGIN',
      },
    });
  };

  return (
    <OriginalAuth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        audience: AUTH0_AUDIENCE,
        redirect_uri: `${window.location.origin}/loginSuccessful`,
      }}
    >
      {children}
    </OriginalAuth0Provider>
  );
};
