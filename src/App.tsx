import { FC } from 'react';

import { rootModule } from '@/modules';
import { RouterProvider } from '@/modules/common/providers/RoutesProvider';
import { StoreProvider } from '@/modules/common/providers/StoreProvider';

const App: FC = () => {
  return (
    <StoreProvider>
      <RouterProvider routes={rootModule.routes} />
    </StoreProvider>
  );
};

export default App;
