'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import logo from '../../../../public/logo.svg'
import HeaderOpenModal from "./components/header-open-modal";
import HeaderMenuModal from "./components/header-menu-modal";
import HeaderScrollTo from "./components/header-scroll-to";

export default async function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
        mt: { xs: '13px', sm: '13px', md: '20px', lg: '20px', xl: '20px' },
        mx: 'auto',
        width: '100%',
        maxWidth: '1440px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            width: { xs: '53px', sm: '53px', md: '92px', lg: '92px', xl: '92px' },
            height: { xs: '44px', sm: '44px', md: '77px', lg: '77px', xl: '77px' },
            mr: { xs: '24px', sm: '24px', md: '24px', lg: '24px', xl: '24px' },
          }}
        >
          <Image src={logo} alt="logo" fill />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '16px', xl: '16px' },
            lineHeight: { xs: '12px', sm: '12px', md: '16px', lg: '16px', xl: '16px' },
            maxWidth: { xs: '126px', sm: '126px', md: '168px', lg: '168px', xl: '168px' },
            fontWeight: 400,
          }}
        >
          Очный класс программирования в Туле
        </Typography>
      </Box>

      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '64px', mr: '48px' }}>
          <Box sx={{ display: 'flex', mt: '4px', justifyContent: 'end', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '16px', mr: '40px' }}>
              г. Тула, ул. Революции, дом 55, офис 202
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px' }}>
              info@bng-it.ru
            </Typography>
          </Box>
          
          <HeaderScrollTo />

        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '64px' }}>
          <Typography sx={{ textWrap: 'nowrap', fontSize: '18px', fontWeight: 700, lineHeight: '24px', color: '#fff', bgcolor: '#FFA700', borderRadius: '8px', px: '20px', py: '8px' }}>
            <a href="tel:+79330283525" style={{ textDecoration: 'none', color: 'inherit' }}>  
              +7 (933) 028 35 25
            </a>
          </Typography>
          <HeaderOpenModal />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'none' },
          alignItems: 'center',
          mr: { xs: '8px', sm: '8px', md: '12px', lg: '12px', xl: '0px' }, // - IconButton padding (8px)
        }}
      >
        <HeaderMenuModal />
      </Box>
    </Box>
  )
}
