'use client';

import { useState } from "react";
import Image from 'next/image';
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import menu from '../../../../../public/icons/menu.svg'
import close from '../../../../../public/icons/close.svg'
import ClientOpenModal from "./header-open-modal";

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
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };
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
      <IconButton onClick={toggleDrawer(true)}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            height: { xs: '28px', sm: '28px', md: '48px', lg: '48px', xl: '48px' },
            width: { xs: '28px', sm: '28px', md: '48px', lg: '48px', xl: '48px' },
          }}
        >
          <Image src={menu} alt="menu" fill />
        </Box>
      </IconButton>

      <Drawer
        open={openMenu}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper ': { width: { xs: '100%', sm: 'inherit', md: 'inherit', lg: 'inherit', xl: 'inherit' } },
        }}
      >
        <Box
          onClick={toggleDrawer(false)}
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
              <IconButton onClick={toggleDrawer(false)} sx={{ position: 'relative', width: '28px', height: '28px', p: 0 }}>
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

          <Box sx={{ minWidth: '343px', mt: '16px', px: '16px', py: '32px', bgcolor: '#F2F5F9', borderRadius: '20px' }}>
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
              <ClientOpenModal />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}
