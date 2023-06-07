import { useAuth0 } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';

import { IStoreProviderProps } from '@/common/providers/StoreProvider/interfaces';
import { store } from '@/common/store';
import { setAccessToken } from '@/common/store/slices/auth';

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        store.dispatch(setAccessToken(token));
      } catch (e) {
        console.error(e);
      }
    })().catch(console.error);
  }, [getAccessTokenSilently]);

  return <Provider store={store}>{children}</Provider>;
};
