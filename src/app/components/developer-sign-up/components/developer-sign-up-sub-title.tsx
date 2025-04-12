'use server'

import { Box, Typography } from "@mui/material";

export default async function DeveloperSignUpSubTitle() {
  return (
    <Box
      sx={{
        maxWidth: { xs: '343px', sm: '343px', md: '482px', lg: '482px', xl: '482px' },
        mb: { xs: '40px', sm: '40px', md: '64px', lg: '64px', xl: '64px' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '16px', md: '24px', lg: '24px', xl: '24px' },
          lineHeight: { xs: '22px', sm: '22px', md: '32px', lg: '32px', xl: '32px' },
        }}
      >
        Освойте разработку веб-сайтов, серверных, настольных и мобильных приложений с использованием языка программирования C# в Туле
      </Typography>
    </Box>
  )
}
