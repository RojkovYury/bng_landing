'use server';

import { Box, Typography } from "@mui/material";
import Image from 'next/image';

interface TableCardProps {
  text: string;
  src: string;
  sx?: any;
}

export default async function TableCard({ text, src, sx }: TableCardProps) {
  return (   
    <Box
      sx={{
        width: { xs: '140px', sm: '140px', md: '140px', lg: '256px', xl: '256px' },
        mr: { xs: '16px', sm: '26px', md: '26px', lg: '40px', xl: '40px' },
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          width: { xs: '64px', sm: '64px', md: '64px', lg: '100px', xl: '100px' },
          height: { xs: '64px', sm: '64px', md: '64px', lg: '100px', xl: '100px' },
          mb: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
        }}
      >
        <Image src={src} alt="" fill />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '16px', xl: '16px' },
          lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}
