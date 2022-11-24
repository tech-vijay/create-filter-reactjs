import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Home } from '../Screens';

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    // {
    //   path: 'user',
    //   element: <Home />,
    //   children: [
    //     {
    //       path: '',
    //       element: <div>Home Index</div>,
    //     },
    //     {
    //       path: ':id',
    //       element: <div>Home Details</div>,
    //     },
    //   ],
    // },
  ]);
  return routes;
};
