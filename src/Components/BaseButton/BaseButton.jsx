import * as React from 'react';
import Button from '@mui/material/Button';

const BaseButton = ({ type }) => {
  switch (type) {
    case 'primary':
      return (
        <div>
          <Button variant="contained">primary</Button>
        </div>
      );
    case 'secondary':
      return (
        <div>
          <Button color="secondary" variant="contained">
            secondary
          </Button>
        </div>
      );
    case 'ternary':
      return (
        <div>
          <Button variant="contained" disabled>
            ternary
          </Button>
        </div>
      );
    case 'error':
      return (
        <div>
          <Button color="error" variant="contained">
            error
          </Button>
        </div>
      );
    default:
      return <Button variant="contained">default</Button>;
  }
};

export default BaseButton;
