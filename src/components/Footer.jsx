import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'red', marginTop: '24%' }}>
      <Typography variant="body1">
        © 2024 Admin Panel
      </Typography>
    </Box>
  );
};

export default Footer;
