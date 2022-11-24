import React from 'react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      This is Home page
      <Outlet />
    </div>
  );
};
