import React from 'react';
import { Box, AppBar, Toolbar, Typography, styled } from '@mui/material';

import { BaseButton } from '../../Components';

export const Header = () => {
  return (
    <Box maxWidth="lg" mx="auto">
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          color: 'white',
          boxShadow: 'none',
        }}
      >
        <Toolbar style={{ padding: '0' }}>
          <StyledLogo>NFT</StyledLogo>
          <BaseButton
            color="success"
            type="primary"
            variant="contained"
            sx={{ height: '3rem', fontWeight: 600 }}
          >
            Connect Wallet
          </BaseButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const StyledLogo = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '42px',
  lineHeight: '48px',
  flexGrow: 1,
}));
