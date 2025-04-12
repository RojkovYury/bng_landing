'use server';

import { Box, Typography } from "@mui/material";

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '40px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

export default async function OurMentorsTitle() {
  return (   
    <Box
      sx={{
        display: 'flex',
        mb: '32px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        mr: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
        ml: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
      }}
    >
      <Typography sx={{ ...titleTypography, color: '#FFA700' }}>
        Наши&nbsp;
      </Typography>
      <Typography sx={{ ...titleTypography }}>
        наставники
      </Typography>
    </Box>
  )
}
