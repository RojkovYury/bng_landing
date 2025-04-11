'use client';

import { useEffect, useState } from "react";
import Image from 'next/image';
import { Box, Drawer, Fab, IconButton, Typography } from "@mui/material";
import menu from '../../../../../public/icons/menu.svg'
import menuWhite from '../../../../../public/icons/menu-white.svg'
import close from '../../../../../public/icons/close.svg'
import SingUpModal from "@/components/sign-up-modal";
import SingUpDrawer from "@/components/sign-up-drawer";

const typographyStyle = {
  fontSize: '14px',
  mb: '16px',
  fontWeight: 600,
  lineHeight: '20px',
  textWrap: 'nowrap',
  cursor: 'pointer',
}

export default function HeaderMenuModal() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (newOpen: boolean) => () => { setOpenMenu(newOpen); };

  const [openModale, setOpenModale] = useState(false);
  const handleOpenModale = () => setOpenModale(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        // scrollIntoView не применять, сломает скролл на мобиле из-за глобального overflow: 'hidden'
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton onClick={toggleMenu(true)}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            height: { xs: '28px', sm: '48px', md: '48px', lg: '48px', xl: '48px' },
            width: { xs: '28px', sm: '48px', md: '48px', lg: '48px', xl: '48px' },
          }}
        >
          <Image src={menu} alt="menu" fill />
        </Box>
      </IconButton>

      <Drawer
        open={openMenu}
        onClose={toggleMenu(false)}
        sx={{
          '& .MuiDrawer-paper ': { width: { xs: '100%', sm: 'inherit', md: 'inherit', lg: 'inherit', xl: 'inherit' } },
        }}
      >
        <Box
          onClick={toggleMenu(false)}
          sx={{
            mx: '16px',
            mb: '16px',
            mt: '21px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', mb: '24px' }}>
              <IconButton onClick={toggleMenu(false)} sx={{ position: 'relative', width: '28px', height: '28px', p: 0 }}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    height: '24px',
                    width: '24px',
                  }}
                >
                  <Image src={close} alt="menu" fill />
                </Box>
              </IconButton>
            </Box>

            <Box>
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
          </Box>

          <Box sx={{ mt: '16px', px: '16px', py: '32px', bgcolor: '#F2F5F9', borderRadius: '20px' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', mb: '16px' }}>
              г. Тула, ул. Революции, дом 55, офис 202
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', mb: '28px' }}>
              info@bng-it.ru
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '64px' }}>
              <Typography sx={{ maxWidth: '208px', textWrap: 'nowrap', fontSize: '18px', fontWeight: 700, lineHeight: '24px', color: '#fff', bgcolor: '#FFA700', borderRadius: '8px', px: '20px', py: '8px' }}>
                <a href="tel:+79330283525" style={{ textDecoration: 'none', color: 'inherit' }}>  
                  +7 (933) 028 35 25
                </a>
              </Typography>

              <Box sx={{ display: 'flex', mt: '10px' }}>
                <Typography
                  onClick={handleOpenModale}
                  sx={{
                    textWrap: 'nowrap',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '100%',
                    color: '#1144AA',
                    borderBottom: '1px dashed #1144AA',
                    cursor: 'pointer',
                    transition: 'border-bottom 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      color: '#1b75fc',
                      borderBottom: '1px dashed #1b75fc',
                    },
                  }}
                >
                  Заказать звонок
                </Typography>
              </Box>

              <SingUpModal open={false} setOpen={undefined} />

            </Box>
          </Box>
        </Box>
      </Drawer>

      <SingUpModal open={openModale} setOpen={setOpenModale} rootSx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }} />
      <SingUpDrawer open={openModale} setOpen={setOpenModale} rootSx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }}/>
    
      <Fab
        color="primary"
        onClick={toggleMenu(true)}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          opacity: showButton ? 0.75 : 0,
          transform: showButton ? 'translateY(0)' : 'translateY(10px)',
          visibility: showButton ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            height: '35px',
            width: '35px',
          }}
        >
          <Image src={menuWhite} alt="menu" fill />
        </Box>
      </Fab>
    </Box>
  )
}
