'use server';

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import logo from '../../../../../public/logo.svg'

export default async function HeaderLogo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width: { xs: '53px', sm: '92px', md: '92px', lg: '92px', xl: '92px' },
          height: { xs: '44px', sm: '77px', md: '77px', lg: '77px', xl: '77px' },
          mr: { xs: '24px', sm: '24px', md: '24px', lg: '24px', xl: '24px' },
        }}
      >
        <Image src={logo} alt="logo" fill priority={true} />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: '12px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
          lineHeight: { xs: '12px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
          maxWidth: { xs: '126px', sm: '168px', md: '168px', lg: '168px', xl: '168px' },
          fontWeight: 400,
          minWidth: { xs: '160px', sm: '200px', md: '200px', lg: '200px', xl: '200px' },
        }}
      >
        Очный мастер-класс по программированию в Туле
      </Typography>
    </Box>
  )
}
