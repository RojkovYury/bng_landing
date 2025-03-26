'use client';

import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from 'next/image';

interface OurMentorsCardProps {
  title: string;
  subTitle: string;
  text: string;

  src: StaticImageData;
  mr?: boolean;
}

export default function OurMentorsCard({ title, subTitle, text, src, mr }: OurMentorsCardProps) {
  return (   
    <Box sx={{ display: 'flex', flexDirection: 'column', mr: mr ? '32px' : '0px' }}>
      <Box sx={{ display: 'flex', height: '359px', width: '459px', flexDirection: 'column' }}>
        <Image
          layout="responsive"
          src={src}
          alt=''
          width={459}
          height={359}
        />
      </Box>
      <Box sx={{ bgcolor: '#F2F5F9', borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px' }}>
        <Typography sx={{ fontSize: '24px', lineHeight: '32px', fontWeight: 700, mt: '32px', mb: '20px', px: '20px' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, mb: '8px', px: '20px' }}>
          {subTitle}
        </Typography>
        <Typography sx={{ fontSize: '18px', lineHeight: '24px', mb: '32px', px: '20px' }}>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}
