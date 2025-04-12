'use server'

import { Box, Typography } from "@mui/material";

const numberTypography = {
  fontSize: { xs: '48px', sm: '48px', md: '64px', lg: '64px', xl: '64px' },
  lineHeight: { xs: '56px', sm: '56px', md: '72px', lg: '72px', xl: '72px' },
  fontWeight: 700,
  color: '#FFA700',
};

const numberTextTopTypography = {
  fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '16px', xl: '16px' },
  lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
  fontWeight: 400,
  color: '#5C6571',
};

const numberTextBottomTypography = {
  fontSize: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
  fontWeight: 700,
  color: '#FFA700',
};

export default async function DeveloperSignUpInfo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>

      <Box
        sx={{
          display: 'flex',
          mr: { xs: '40px', sm: '40px', md: '40px', lg: '64px', xl: '64px' },
        }}
      >
        <Typography sx={{ ...numberTypography }}>3</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            ml: '12px',
          }}
        >
          <Typography sx={{ ...numberTextTopTypography }}>ДЛИТЕЛЬНОСТЬ</Typography>
          <Typography sx={{ ...numberTextBottomTypography }}>МЕСЯЦА</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
      <Typography sx={{ ...numberTypography }}>21</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            ml: '12px',
          }}
        >
          <Typography sx={{ ...numberTextTopTypography }}>ДАТА СТАРТА</Typography>
          <Typography sx={{ ...numberTextBottomTypography }}>АПРЕЛЯ</Typography>
        </Box>
      </Box>
    </Box>
  )
}
