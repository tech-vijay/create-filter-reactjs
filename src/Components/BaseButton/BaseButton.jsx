import * as React from 'react';
import Button from '@mui/material/Button';

const type = 'primary' | 'secondary' | 'ternary' | 'error';

const BaseButton = () => {
  console.log('type', type);
  return (
    <>
      <Button variant="contained">Contained</Button>
    </>
  );
};

export default BaseButton;
