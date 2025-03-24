'use client';

import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from 'next/image';

interface WhoIsItForCardProps {
  title: string;
  text: string;
  src: StaticImageData;
  mr?: boolean;
}

export default function WhoIsItForCard({ title, text, src, mr }: WhoIsItForCardProps) {
  return (   
    <Box sx={{ display: 'flex', flexDirection: 'column', mr: mr ? '32px' : '0px', bgcolor: '#fff', borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px'  }}>
      
      <Box sx={{ display: 'flex', height: '359px', width: '459px', flexDirection: 'column', mb: '32px' }}>
        <Image
          layout="responsive"
          src={src}
          alt=''
          width={459}
          height={359}
        />
      </Box>

      <Typography sx={{ fontSize: '24px', lineHeight: '32px', fontWeight: 700, mb: '20px', px: '20px' }}>
        {title}
      </Typography>

      <Typography sx={{ fontSize: '18px', lineHeight: '24px', mb: '32px', px: '20px' }}>
        {text}
      </Typography>

    </Box>
  )
}
