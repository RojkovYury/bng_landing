'use server';

import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from 'next/image';

interface WhoIsItForCardProps {
  title: string;
  text: string;
  src: StaticImageData;
  mr?: boolean;
}

export default async function WhoIsItForCard({ title, text, src, mr }: WhoIsItForCardProps) {
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
          mb: { md: '24px', lg: '32px', xl: '32px' },
        }}
      >
        <Image src={src} alt="" layout="fill" objectFit="contain" />
      </Box>

      <Box>
        <Typography
          sx={{ 
            fontSize: { md: '16px', lg: '24px', xl: '24px' },
            lineHeight: { md: '22px', lg: '32px', xl: '32px' },
            fontWeight: 700,
            mb: { md: '12px', lg: '20px', xl: '20px' },
            px: { md: '16px', lg: '20px', xl: '20px' },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { md: '14px', lg: '18px', xl: '18px' },
            lineHeight: { md: '20px', lg: '24px', xl: '24px' },
            mb: { md: '24px', lg: '32px', xl: '32px' },
            px: { md: '16px', lg: '20px', xl: '20px' },
          }}
        >
          {text}
        </Typography>
      </Box>

    </Box>
  )
}
