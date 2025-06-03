'use client';

import { Box, Typography } from "@mui/material";

const typographyStyle = {
  fontSize: '16px',
  mr: '28px',
  fontWeight: 600,
  lineHeight: '20px',
  textWrap: 'nowrap',
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
  transition: 'border-bottom 0.3s ease',
  textDecoration: 'none',
  '&:hover': {
    borderBottom: '2px solid #FFA700',
  },
};

export default function HeaderScrollTo() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const indentation = (id === 'program' || id === 'faq') ? -120 : 50; 
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - indentation;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setTimeout(() => {
        window.location.hash = id;
      }, 500);
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
