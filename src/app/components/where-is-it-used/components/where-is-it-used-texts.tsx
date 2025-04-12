'use server'

import { Box, Typography } from '@mui/material';

const textTypography = {
  fontSize: { xs: '16px', sm: '16px', md: '22px', lg: '22px', xl: '24px' },
  lineHeight: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '32px' },
}

export default async function WhereIsItUsedTexts() {
  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: '310px', sm: '310px', md: '704px', lg: '704px', xl: '704px' },
          mb: '20px',
        }}
      >
        <Typography sx={{ ...textTypography }}>
          На C# разрабатывают высоконагруженные веб-сайты,
        </Typography>

        <Typography sx={{ ...textTypography }}>
          мобильные и настольные приложения, а также игры
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: { xs: '310px', sm: '310px', md: '704px', lg: '704px', xl: '704px' },
          mb: { xs: '40px', sm: '40px', md: '64px', lg: '64px', xl: '64px' },
        }}
        >
        <Typography sx={{ ...textTypography, fontWeight: 500 }}>
          Освоив этот язык, вы сможете создавать все это и претендовать на высокооплачиваемую работу
        </Typography>
      </Box>
    </>
  );
}
