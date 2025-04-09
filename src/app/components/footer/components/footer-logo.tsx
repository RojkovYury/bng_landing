'use server';

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import logo from '../../../../../public/logo.svg'

export default async function FooterLogo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: { xs: '20px', sm: '20px', md: '20px', lg: '0px', xl: '0px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: { xs: '53px', sm: '80px', md: '80px', lg: '80px', xl: '80px' },
          width: { xs: '44px', sm: '96px', md: '96px', lg: '96px', xl: '96px' },
          mr: { xs: '16px', sm: '24px', md: '24px', lg: '24px', xl: '24px' },
        }}
      >
        <Image
          layout="responsive"
          src={logo}
          alt={logo}
          width={96}
          height={80}
        />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '14px', xl: '14px' },
          lineHeight: { xs: '12px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
          fontWeight: { xs: 400, sm: 500, md: 500, lg: 500, xl: 500 },
          maxWidth: { xs: '126px', sm: '198px', md: '198px', lg: '198px', xl: '198px' },
        }}
      >
        Очный класс программирования в Туле
      </Typography>
    </Box>
  )
}
