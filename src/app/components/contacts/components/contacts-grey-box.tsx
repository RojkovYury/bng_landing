'use server';

import { Box, Typography } from "@mui/material";
import Image from 'next/image';

interface ContactsGreyBoxProps {
  src: string;
  text: string;
  sx?: any;
  textSx?: any;
}

export default async function ContactsGreyBox({ src, text, sx, textSx }: ContactsGreyBoxProps) {
  return ( 
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pr: { xs: '16px', sm: '16px', md: '16px', lg: '40px', xl: '40px' },
        pl: { xs: '12px', sm: '12px', md: '12px', lg: '40px', xl: '40px' },
        py: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
        bgcolor: '#F2F5F9',
        borderRadius: '8px',
        cursor: 'pointer', // !!
        // width: '100%',
        // ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          width: { xs: '24px', sm: '24px', md: '24px', lg: '40px', xl: '40px' },
          height: { xs: '24px', sm: '24px', md: '24px', lg: '40px', xl: '40px' },
          mr: { xs: '12px', sm: '12px', md: '12px', lg: '20px', xl: '20px' },
        }}
      >
        <Image src={src} alt="" layout="fill" objectFit="contain" />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '18px' },
          lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
          fontWeight: 500,
          ...textSx,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

/*24

<Box
        sx={{
          display: 'flex',
          position: 'relative',
          width: { xs: '64px', sm: '64px', md: '64px', lg: '100px', xl: '100px' },
          height: { xs: '64px', sm: '64px', md: '64px', lg: '100px', xl: '100px' },
          mr: { xs: '12px', sm: '12px', md: '12px', lg: '20px', xl: '20px' },
        }}
      >
        <Image src={src} alt="" layout="fill" objectFit="contain" />
      </Box>

*/