'use client';

import { Box, IconButton } from "@mui/material";
import Image from 'next/image';
import tg from '../../public/icons/tg.png'
import wa from '../../public/icons/wa.png'

const iconButtonStyle = {
  width: '22px',
  height: '22px',
  transition: 'all 0.3s',
  "&:hover": {
    scale: '1.2',
  }
}

export default function SocialNetworkIcons() {
  return (
    <Box>
      <IconButton
        href='https://t.me/academybng'
        target='_blank'
        sx={{mr: '8px', ...iconButtonStyle}}
      >
        <Image src={tg} alt="tg" fill/>
      </IconButton>

      <IconButton
       href='https://wa.me/+79330283525'
        target='_blank'
        sx={{ ...iconButtonStyle }}
      >
        <Image src={wa} alt="wa" fill/>
      </IconButton>
    </Box>
  )
}
