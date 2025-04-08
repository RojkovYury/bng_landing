'use server';

import { Box, Typography } from "@mui/material";

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '40px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

export default async function ContactsTitle() {
  return (
    <Box
      sx={{
        display: 'flex',
        mb: { xs: '32px', sm: '32px', md: '32px', lg: '80px', xl: '80px' },
        width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 32px)', md: 'calc(100% - 40px)', lg: 'calc(100% - 40px)', xl: 'calc(100% - 40px)' },
        mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
      }}
    >
      <Typography sx={{ ...titleTypography, color: '#FFA700' }}>
        Контакты&nbsp;
      </Typography>
      <Typography sx={{ ...titleTypography }}>
        нашего офиса
      </Typography>
    </Box>
  )
}
