import React from 'react';
import Box from '@mui/material/Box';

import { BaseButton } from './Components';
import { DefaultLayout } from './Layout/DefaultLayout';

export const App = () => {
  return (
    <DefaultLayout>
      <Box
        sx={{
          width: 500,
          height: 500,
          alignItems: 'center',
          display: 'flex',
          gap: 2
        }}
      >
        <BaseButton type="primary" />
        <BaseButton type="secondary" />
        <BaseButton type="ternary" />
        <BaseButton type="error" />
      </Box>
    </DefaultLayout>
  );
};
