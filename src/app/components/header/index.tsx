'use server'

import { Box, Typography } from "@mui/material";
import HeaderOpenModal from "./components/header-open-modal";
import HeaderMenuModal from "./components/header-menu-modal";
import HeaderScrollTo from "./components/header-scroll-to";
import HeaderLogo from "./components/header-logo";
import HeaderFabUp from "./components/header-fab-up";
import SocialNetworkIcons from "@/components/social-network-icons";

export default async function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
        mt: { xs: '13px', sm: '20px', md: '20px', lg: '20px', xl: '20px' },
        mx: 'auto',
        width: '100%',
        maxWidth: '1440px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <HeaderLogo />
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '64px', mr: '48px' }}>
            <Box sx={{ display: 'flex', mt: '4px', justifyContent: 'end', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '16px', mr: '40px' }}>
                г. Тула, ул. Революции, дом 55, офис 202
              </Typography>
              
              <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', mr: '40px' }}>
                <a href="mailto:academy@bng-it.ru" style={{ textDecoration: 'none', color: 'inherit' }}>
                  academy@bng-it.ru
                </a>
              </Typography>

              <SocialNetworkIcons />
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
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'none' },
          alignItems: 'center',
          mr: { xs: '8px', sm: '12px', md: '12px', lg: '12px', xl: '0px' },
        }}
      >
        <HeaderMenuModal />
      </Box>

      <HeaderFabUp />
    </Box>
  )
}
