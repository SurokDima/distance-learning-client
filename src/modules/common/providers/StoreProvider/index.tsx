import { useAuth0 } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';

import { setAccessToken } from '@/modules/auth/store/auth';
import { IStoreProviderProps } from '@/modules/common/providers/StoreProvider/interfaces';
import { store } from '@/store';

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      store.dispatch(setAccessToken(token));
    })().catch(console.error);
  }, [getAccessTokenSilently]);

  return <Provider store={store}>{children}</Provider>;
};
