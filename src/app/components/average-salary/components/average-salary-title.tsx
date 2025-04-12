'use server'

import { Box, Typography } from "@mui/material";

export default async function AverageSalaryTitle() {
  return (
    <Box sx={{ mb: { xs: '24px', sm: '24px', md: '0px', lg: '0px', xl: '0px' } }}>
      <Typography
        sx={{
          fontSize: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
          lineHeight: { xs: '40px', sm: '40px', md: '40px', lg: '56px', xl: '56px' },
          fontWeight: 700,
          color: '#FFA700',
        }}
      >
        220 000 ₽
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '18px', md: '18px', lg: '32px', xl: '32px' },
          lineHeight: { xs: '22px', sm: '22px', md: '22px', lg: '40px', xl: '40px' },
          fontWeight: 700,
        }}
      >
        Средняя зарплата специалиста *
      </Typography>
    </Box>
  )
}
