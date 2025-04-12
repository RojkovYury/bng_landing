'use server'

import { Box, Typography } from "@mui/material";

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '48px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '56px', lg: '56px', xl: '56px' },
  fontWeight: 700,
};

export default async function DeveloperSignUpTitle() {
  return (
    <Box
      sx={{
        display: 'flex',
        mb: { xs: '20px', sm: '20px', md: '32px', lg: '32px', xl: '32px' },
        mx: { xs: '0px', sm: '0px' },
      }}
    >
      <Typography sx={{ ...titleTypography, color: '#FFA700' }}>
        C#&nbsp;
      </Typography>

      <Typography sx={{ ...titleTypography }}>
        - разработчик
      </Typography>
    </Box>
  )
}
