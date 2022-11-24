import React from 'react';
import { Box, styled } from '@mui/material';

import { Header } from '../../Containers';
import banner from '../../Assets/Images/banner.png';

const StyledBox = styled('div')(() => ({
  backgroundImage: `url(${banner})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

export const DefaultLayout = (props) => {
  // eslint-disable-next-line
  const { children } = props;
  return (
    <>
      <StyledBox>
        <Header />
        <Box
          maxWidth="lg"
          mx="auto"
          sx={{
            width: '100%',
            height: '100vh',
          }}
        >
          {children}
        </Box>
      </StyledBox>
    </>
  );
};
