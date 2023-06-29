import { useAuth0 } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';

import { setAccessToken } from '@/modules/auth/store/auth';
import { IStoreProviderProps } from '@/modules/common/providers/StoreProvider/interfaces';
import { store } from '@/store';

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    console.log('Imma get the token');
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log('setting token', token);
        store.dispatch(setAccessToken(token));
      } catch (e) {
        console.error(e);
      }
    })().catch(console.error);
  }, [getAccessTokenSilently]);

  return <Provider store={store}>{children}</Provider>;
};
