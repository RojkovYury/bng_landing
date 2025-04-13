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
        pr: { xs: '16px', sm: '16px', md: '0px', lg: '30px', xl: '40px' },
        pl: { xs: '12px', sm: '12px', md: '20px', lg: '20px', xl: '40px' },
        py: { xs: '16px', sm: '16px', md: '16px', lg: '16px', xl: '20px' },
        bgcolor: '#F2F5F9',
        borderRadius: '8px',
        width: { xs: 'calc(100% - 28px)', sm: 'calc(100% - 28px)', md: 'calc(100% - 20px)', lg: '100%', xl: '100%' },
        textWrap: { xs: 'wrap', sm: 'nowrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' },
        transition: 'background-color 0.3s ease',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          width: { xs: '24px', sm: '24px', md: '24px', lg: '32px', xl: '40px' },
          height: { xs: '24px', sm: '24px', md: '24px', lg: '32px', xl: '40px' },
          minWidth: { xs: '24px', sm: '24px', md: '24px', lg: '32px', xl: '40px' },
          minHeight: { xs: '24px', sm: '24px', md: '24px', lg: '32px', xl: '40px' },
          mr: { xs: '12px', sm: '12px', md: '20px', lg: '16px', xl: '20px' },
        }}
      >
        <Image src={src} alt="" fill />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '14px', md: '18px', lg: '16px', xl: '18px' },
          lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '22px', xl: '24px' },
          fontWeight: 500,
          ...textSx,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}
