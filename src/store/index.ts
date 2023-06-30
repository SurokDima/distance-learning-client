import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { rootModule } from '@/modules';
import { api } from '@/store/api';

export const store = configureStore({
  reducer: {
    ...rootModule.reducers,
    [api.reducerPath]: api.reducer,
    // [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  // .concat(coursesApi.middleware),
});

setupListeners(store.dispatch);
