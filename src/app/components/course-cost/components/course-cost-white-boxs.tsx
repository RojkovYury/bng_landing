'use server';

import { Box, Typography } from "@mui/material";

const boxContainer = {
  display: 'flex',
  flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column', xl: 'column' },
  borderRadius: '8px',
  py: '12px',
  px: { xs: '16px', sm: '16px', md: '16px', lg: '32px', xl: '40px' },
  bgcolor: '#FFF',
  mr: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: '20px' },
}

const boxTypography = {
  fontSize: { xs: '14px', sm: '18px', md: '14px', lg: '18px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '22px', md: '20px', lg: '22px', xl: '24px' },
  mb: { xs: '0px', sm: '0px', md: '4px', lg: '12px', xl: '12px' },
}

export default async function CourseCostWhiteBoxs() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
      }}
    >
      <Box
        sx={{
          ...boxContainer,
          mb: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' },
          maxWidth: { xs: '233px', sm: '283px', md: 'unset', lg: 'unset', xl: 'unset' },
        }}
      >
        <Typography sx={{ ...boxTypography, fontWeight: 600, mr: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' } }}>
          ДАТА СТАРТА:
        </Typography>
        <Typography
          sx={{ ...boxTypography, fontWeight: 700, color: '#1144AA' }}>
          21 АПРЕЛЯ
        </Typography>
      </Box>

      <Box
        sx={{
          ...boxContainer,
          mb: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' },
          maxWidth: { xs: '189px', sm: '239px', md: 'unset', lg: 'unset', xl: 'unset' },
        }}
      >
        <Typography sx={{ ...boxTypography, fontWeight: 600, mr: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' } }}>
          ДОСТУПНО:
        </Typography>
        <Typography sx={{ ...boxTypography, fontWeight: 700, color: '#1144AA' }}>
          5 МЕСТ
        </Typography>
      </Box>

      <Box
        sx={{
          ...boxContainer,
          mr: '0px',
          maxWidth: { xs: '252px', sm: '302px', md: 'unset', lg: 'unset', xl: 'unset' },
        }}
      >
        <Typography sx={{ ...boxTypography, fontWeight: 600, mr: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' } }}>
          ДЛИТЕЛЬНОСТЬ:
        </Typography>
        <Typography sx={{ ...boxTypography, fontWeight: 700, color: '#1144AA' }}>
          3 МЕСЯЦА
        </Typography>
      </Box>
    </Box>
  )
}
