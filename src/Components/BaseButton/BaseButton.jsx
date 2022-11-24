import * as React from 'react';
import Button from '@mui/material/Button';

export const BaseButton = (props) => {
  // eslint-disable-next-line
  const { children, type, ...res } = props;

  switch (type) {
    case 'primary':
      return (
        <div>
          <Button
            {...res}
            sx={{
              backgroundColor: '#233f44',
              fontWeight: 600,
              height: '3rem',
              '&:hover': {
                backgroundColor: '#233f44',
                color: 'lightblue',
              },
            }}
          >
            {children}
          </Button>
        </div>
      );
    case 'secondary':
      return (
        <div>
          <Button {...res} color="secondary" variant="contained">
            {children}
          </Button>
        </div>
      );
    case 'ternary':
      return (
        <div>
          <Button {...res} variant="contained" disabled>
            {children}
          </Button>
        </div>
      );
    case 'error':
      return (
        <div>
          <Button {...res} color="error" variant="contained">
            {children}
          </Button>
        </div>
      );
    default:
      return <Button variant="contained">default</Button>;
  }
};
