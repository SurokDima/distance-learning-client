import { useAuth0 } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';

export const HomePage: FC = () => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently().then(console.log).catch(console.error);
  }, [getAccessTokenSilently]);

  return <div>Home Page</div>;
};
