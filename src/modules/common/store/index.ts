import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { rootModule } from '@/modules';
import { ownApi } from '@/modules/common/store/apis/own.api';

export const store = configureStore({
  reducer: {
    ...rootModule.reducers,
    [ownApi.reducerPath]: ownApi.reducer,
    // [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ownApi.middleware),
  // .concat(coursesApi.middleware),
});

setupListeners(store.dispatch);
