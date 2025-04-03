'use client'; // ????

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mr: mr ? '32px' : '0px',
        bgcolor: '#fff',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        width: '459px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          aspectRatio: '16 / 13',
          mb: { xs: '24px', sm: '24px', md: '24px', lg: '32px', xl: '32px' },
        }}
      >
        <Image src={src} alt="" layout="fill" objectFit="contain" />
      </Box>

      <Box>
        <Typography
          sx={{ 
            fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '24px', xl: '24px' },
            lineHeight: { xs: '22px', sm: '22px', md: '22px', lg: '32px', xl: '32px' },
            fontWeight: 700,
            mb: { xs: '12px', sm: '12px', md: '12px', lg: '20px', xl: '20px' },
            px: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '18px' },
            lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
            mb: { xs: '24px', sm: '24px', md: '24px', lg: '32px', xl: '32px' },
            px: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
          }}
        >
          {text}
        </Typography>
      </Box>

    </Box>
  )
}
