'use server';

import { Box, Typography } from "@mui/material";

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '40px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

export default async function CourseCostTitle() {
  return (
    <Box
    sx={{
      display: 'flex',
      mt: { xs: '80px', sm: '80px', md: '80px', lg: '180px', xl: '180px' },
      mb: { xs: '32px', sm: '32px', md: '32px', lg: '80px', xl: '80px' },
    }}
  >
      <Typography sx={{ ...titleTypography }}>
        Часто задаваемые&nbsp;
      </Typography>
      <Typography sx={{ ...titleTypography, color: '#FFA700' }}>
        вопросы
      </Typography>
    </Box>
  )
}
