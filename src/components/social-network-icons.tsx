'use client';

import { Box, IconButton } from "@mui/material";
import Image from 'next/image';
import tg from '../../public/icons/tg.png'
import wa from '../../public/icons/wa.png'

interface SocialNetworkIconsProps {
  large?: boolean;
}

export default function SocialNetworkIcons({ large }: SocialNetworkIconsProps) {
  return (
    <Box>
      <IconButton
        href='https://t.me/academybng'
        target='_blank'
        sx={{
          mr: '8px',
          width: large
            ? { xs: '36px', sm: '36px', md: '46px', lg: '46px', xl: '46px' }
            : '22px',
          height: large
            ? { xs: '36px', sm: '36px', md: '46px', lg: '46px', xl: '46px' }
            : '22px',
          transition: 'all 0.3s',
          "&:hover": {
            scale: '1.2',
          }
        }}
      >
        <Image src={tg} alt="tg" fill priority={true}/>
      </IconButton>

      <IconButton
       href='https://wa.me/+79330283525'
        target='_blank'
        sx={{
          width: large
            ? { xs: '36px', sm: '36px', md: '46px', lg: '46px', xl: '46px' }
            : '22px',
          height: large
            ? { xs: '36px', sm: '36px', md: '46px', lg: '46px', xl: '46px' }
            : '22px',
          transition: 'all 0.3s',
          "&:hover": {
            scale: '1.2',
          }
        }}
      >
        <Image src={wa} alt="wa" fill priority={true}/>
      </IconButton>
    </Box>
  )
}
