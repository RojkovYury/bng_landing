'use server';

import Timer from "@/components/timer";
import { Box, Typography } from "@mui/material";

export default async function CourseCostTimer() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'space-between', sm: 'space-between', md: 'end', lg: 'end', xl: 'end' },
        mb: '20px',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '18px' },
          lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
          fontWeight: 400,
          mr: '16px',
        }}
      >
        Скидка действует
      </Typography>
      
      <Timer />

    </Box>
  )
}
