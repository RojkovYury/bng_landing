'use server'

import { Box, Typography } from '@mui/material';

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '46px', lg: '46px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '54px', lg: '54px', xl: '56px' },
  fontWeight: 700,
}

export default async function WhereIsItUsedTitle() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
        mb: { xs: '32px', sm: '32px', md: '80px', lg: '80px', xl: '80px' },
      }}
    >
      <Typography sx={{ ...titleTypography }}>Где применяется&nbsp;</Typography>
      <Typography sx={{ ...titleTypography, color: '#FFA700' }}>язык С#</Typography>
    </Box>
  );
}
