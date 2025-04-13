'use client';

import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from "react";

export default function HeaderFabUp() {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Fab
        color="primary"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: { xs: '82px', sm: '82px', md: '82px', lg: '82px', xl: '20px' },
          right: '20px',
          zIndex: 1000,
          opacity: showButton ? 0.75 : 0,
          transform: showButton ? 'translateY(0)' : 'translateY(10px)',
          visibility: showButton ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
        }}
      >
        <KeyboardArrowUpIcon fontSize={'large'}/>
      </Fab>
    </>
  )
}
