'use server'

import { Box } from "@mui/material";
import FooterLogo from "./components/footer-logo";
import FooterFeedback from "./components/footer-feedback";
import FooterInfo from "./components/footer-info";

export default async function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 32px)', md: 'calc(100% - 40px)', lg: 'calc(100% - 40px)', xl: 'calc(100% - 40px)' },
        mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: 'auto' },
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'column' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
          justifyContent: 'space-between',
          mb: '32px',
          width: '100%',
      }}>

        <FooterLogo />
        <FooterFeedback />
      </Box>

      <FooterInfo />
    </Box>
  )
}
