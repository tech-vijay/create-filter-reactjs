import React from 'react';

import { DefaultLayout } from './Layout';
import { Router } from './Routers';

export const App = () => {
  return (
    <DefaultLayout>
      <Router />
    </DefaultLayout>
  );
};
