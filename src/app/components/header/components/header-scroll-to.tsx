'use client';

import { Box, Typography } from "@mui/material";

const typographyStyle = {
  fontSize: '16px',
  mr: '28px',
  fontWeight: 600,
  lineHeight: '20px',
  textWrap: 'nowrap',
  cursor: 'pointer',
}

export default function HeaderScrollTo() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography sx={{ ...typographyStyle }} onClick={() => scrollToSection('advantages')}>
        ПРЕИМУЩЕСТВА
      </Typography>
      <Typography sx={{ ...typographyStyle }} onClick={() => scrollToSection('forWhom')}>
        ДЛЯ КОГО
      </Typography>
      <Typography sx={{ ...typographyStyle }} onClick={() => scrollToSection('program')}>
        ПРОГРАММА
      </Typography>
      <Typography sx={{ ...typographyStyle }} onClick={() => scrollToSection('mentors')}>
        НАСТАВНИКИ
      </Typography>
      <Typography sx={{ ...typographyStyle }} onClick={() => scrollToSection('price')}>
        ЦЕНА
      </Typography>
      <Typography sx={{ ...typographyStyle }} onClick={() => scrollToSection('faq')}>
        FAQ
      </Typography>
      <Typography sx={{ ...typographyStyle, mr: '0px' }} onClick={() => scrollToSection('contacts')}>
        КОНТАКТЫ
      </Typography>
    </Box>
  )
}
