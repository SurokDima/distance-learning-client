import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { rootModule } from '@/modules';
import { api } from '@/store/api';

// TODO refactor that
export const store = configureStore({
  reducer: {
    ...rootModule.reducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
