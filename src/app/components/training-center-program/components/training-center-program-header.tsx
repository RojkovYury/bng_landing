'use client';

import { Box, Typography } from "@mui/material";

const titleText = {
  fontSize: { xs: '32px', sm: '32px', md: '48px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '56px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

const boxText = {
  fontSize: { xs: '14px', sm: '14px', md: '20px', lg: '20px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
  fontWeight: 600,
  mr: { xs: '0px', sm: '12px', md: '12px', lg: '12px', xl: '12px' },
  textWrap: 'nowrap',
}

const boxTextSecondary = {
  fontSize: { xs: '14px', sm: '14px', md: '20px', lg: '20px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
  fontWeight: 700,
  color: '#1144AA',
  textWrap: 'nowrap',
}

export default function TrainingCenterProgramHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
        mt: { xs: '80px', sm: '80px', md: '180px', lg: '180px', xl: '180px' },
        mb: { xs: '40px', sm: '40px', md: '80px', lg: '80px', xl: '80px' },
        mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
      }}
    >
      <Box sx={{ mb: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px' }, mr: '20px' }}>
        <Typography sx={{ ...titleText, color: '#FFA700' }}>Программа</Typography>
        <Typography sx={{ ...titleText }}>нашего учебного центра</Typography>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: { xs: 'space-between', sm: 'space-between', md: 'center', lg: 'center', xl: 'center' },
          flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column', xl: 'column' },
        }}
      >
        <Box
          sx={{
            mt: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
            display: 'flex',
            p: '12px',
            border: '2px solid #FFA700',
            borderRadius: '8px',
            mb: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: '20px' },
            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
          }}
        >
          <Typography sx={{ ...boxText }}>КУРС РАЗБИТ НА</Typography>
          <Typography sx={{ ...boxTextSecondary }}>3 МОДУЛЯ</Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
            display: 'flex',
            p: '12px',
            border: '2px solid #FFA700',
            borderRadius: '8px',
            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
          }}
        >
          <Typography sx={{ ...boxText }}>ДЛИТЕЛЬНОСТЬ:</Typography>
          <Typography sx={{ ...boxTextSecondary }}>3 МЕСЯЦА</Typography>
        </Box>
      </Box>
    </Box>
  )
}
