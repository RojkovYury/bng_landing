'use client';

import { Box, Typography } from "@mui/material";
import Image from 'next/image';

interface ButtonBlueProps {
  text: string;
  src: string;
  sx?: any;
}

export default function TableCard({ text, src, sx }: ButtonBlueProps) {
  return (   
    <Box sx={{ width: '256px', mr: '40px', ...sx }}>
      <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
        <Image
          layout="responsive"
          src={src}
          alt={src}
          width={100}
          height={100}
        />
      </Box>
      <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
        {text}
      </Typography>
    </Box>
  )
}
