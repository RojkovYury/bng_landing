'use server';

import { Box, Typography } from "@mui/material";
import FooterButtonModalOpen from "./footer-button-modal-open";
import SocialNetworkIcons from "@/components/social-network-icons";

const TypographyStyle = {
  fontSize: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
};

export default async function FooterFeedback () {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: { xs: '100%', sm: '100%', md: 'unset', lg: 'unset', xl: 'unset' },
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
        }}
      >
        <Typography
          sx={{
            ...TypographyStyle,
            fontWeight: 400,
            mr: '20px',
            mb: { xs: '12px', sm: '0px', md: '0px', lg: '0px', xl: '0px' },
          }}
        >
          <a href="mailto:info@bng-it.ru" style={{ textDecoration: 'none', color: 'inherit' }}>
            info@bng-it.ru
          </a>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'unset', sm: 'center', md: 'center', lg: 'center', xl: 'center' },
            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
          }}
        >
          <Typography
            sx={{
              ...TypographyStyle,
              fontWeight: 700,
              mr: '20px',
              mb: { xs: '12px', sm: '0px', md: '0px', lg: '0px', xl: '0px' },
            }}
          >
            +7 (933) 028 35 25
          </Typography>
          <Box sx={{ mr: { xs: '0px', sm: '0px', md: '0px', lg: '20px', xl: '20px' } }}>
            <SocialNetworkIcons />
          </Box>
        </Box>
      </Box>

      <FooterButtonModalOpen />
    </Box>
  )
}
