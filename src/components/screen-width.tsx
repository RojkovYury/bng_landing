/**
 * Компонент для тестирования адаптивности, в приложении не используется
 */

'use server'

import { Box, Typography } from '@mui/material';

interface ScreeWidthProps {
  display: string;
}

const style = {
  fontSize: '48px',
  my: '10px',
  mx: '20px',
}

export default async function ScreeWidth({ display }: ScreeWidthProps) {
  return (
    <Box
      sx={{
        display: display,
        position: 'fixed',
        zIndex: 999,
        top: '100px',
        left: '10px',
        bgcolor: '#fff',
        borderRadius: '20px',
        border: '2px solid lightgrey',
      }}
    >
      <Typography sx={{ ...style, display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }}>
        XS 0px - 599px
      </Typography>
      <Typography sx={{ ...style, display: { xs: 'none', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
        SM 600px - 899px
      </Typography>
      <Typography sx={{ ...style, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none', xl: 'none' } }}>
        MD 900px - 1199px
      </Typography>
      <Typography sx={{ ...style, display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'none' } }}>
        LG 1200px - 1479px
      </Typography>
      <Typography sx={{ ...style, display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex' } }}>
        XL 1480px - inf
      </Typography>
    </Box>
  );
}
