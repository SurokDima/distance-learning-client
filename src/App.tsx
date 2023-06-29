import { FC } from 'react';

import { rootModule } from '@/modules';
import { RouterProvider } from '@/modules/common/providers/RoutesProvider';

const App: FC = () => {
  return <RouterProvider routes={rootModule.routes} />;
};

export default App;
