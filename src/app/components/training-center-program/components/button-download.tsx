'use client';

import { Button } from "@mui/material";

export default function ButtonDownload() {
  const handleClick = () => console.log('Downloading...');
  return (
    <a href={'/downloading/training-plan.txt'} download style={{ textDecoration: 'none', display: 'inline-block' }}>
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          textWrap: 'nowrap',
          bgcolor: '#FFFFFF',
          color: '#2F3134',
          boxShadow: 'none',
          border: '2px solid #FFA700',
          borderRadius: '8px',
          mr: '80px',
          mb: { xs: '20px', sm: '20px', md: '20px', lg: '0px', xl: '0px' },
          px: { xs: '16px', sm: '16px', md: '24px', lg: '24px', xl: '24px' },
          py: '12px',

          textTransform: 'none',
          fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px', xl: '16px' },
          lineHeight: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
          fontWeight: 500,

          '&:hover': {
            color: '#FFFFFF',
            bgcolor: '#FF7B00',
            border: '2px solid #FF7B00',
            boxShadow: 'none',
          },
        }}
      >
        Скачать подробный план
      </Button>
    </a>
  )
}
