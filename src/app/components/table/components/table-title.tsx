'use server'

import { Box, Typography } from '@mui/material';

export default async function TableTitle() {
  return (
    <Box
      id="advantages"
      sx={{
        mt: { xs: '80px', sm: '80px', md: '80px', lg: '80px', xl: '80px' },
        position: 'relative',
        maxWidth: '1440px',
        mr: { xs: '0px', sm: '20px', md: '0px', lg: '20px', xl: 'auto' },
        ml: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: 'auto' },
        width: '100%',
        display: 'flex',
        justifyContent: { xs: 'unset', sm: 'unset', md: 'center', lg: 'unset', xl: 'unset' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '32px', sm: '32px', md: '46px', lg: '46px', xl: '48px' },
          lineHeight: { xs: '40px', sm: '40px', md: '54px', lg: '54px', xl: '56px' },
          mb: { xs: '32px', sm: '32px', md: '80px', lg: '80px', xl: '80px' },
          fontWeight: 700,
          // color: '#FFA700'
        }}
      >
        Преимущества
      </Typography>
    </Box>
  );
}
