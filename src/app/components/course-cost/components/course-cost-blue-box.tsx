'use server';

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import background from '../../../../../public/images/course-cost-bg.png'
import backgroundMobile from '../../../../../public/images/course-cost-bg-mobile.png'

export default async function CourseCostBlueBox() {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        justifyContent: { xs: 'start', sm: 'start', md: 'center', lg: 'center', xl: 'center' },
        flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column', xl: 'column' },
        bgcolor: '#1144AA',
        borderRadius: '20px',
        py: { xs: '24px', sm: '24px', md: '58px', lg: '58px', xl: '58px' },
        px: { xs: '20px', sm: '20px', md: '44px', lg: '64px', xl: '64px' },
        width: { xs: 'calc(100% - 40px)', sm: 'calc(100% - 40px)', md: '150px', lg: '285px', xl: '285px' },
        alignItems: { xs: 'center', sm: 'center', md: 'unset', lg: 'unset', xl: 'unset' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '18px', md: '22px', lg: '24px', xl: '24px' },
          lineHeight: { xs: '20px', sm: '20px', md: '28px', lg: '32px', xl: '32px' },
          fontWeight: 500,
          color: '#F2F5F9',
          mb: { xs: '0px', sm: '0px', md: '12px', lg: '12px', xl: '12px' },
          mr: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
          textDecoration: 'line-through',
          zIndex: 3,
        }}
      >
        24 000 ₽
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '28px', sm: '28px', md: '32px', lg: '40px', xl: '40px' },
          lineHeight: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
          fontWeight: 700,
          color: '#FFF',
          zIndex: 3,
        }}
      >
        20 000 ₽
      </Typography>

      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          bottom: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px' },
          right: '0px',
          display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
          width: '316px',
          height: '216px',
        }}
        >
        <Image src={background} alt="" fill/>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          bottom: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px' },
          right: '0px',
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
          width: '177px',
          height: '80px',
        }}
        >
        <Image src={backgroundMobile} alt="" fill/>
      </Box>
    </Box>
  )
}
