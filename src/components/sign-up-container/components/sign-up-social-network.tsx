import SocialNetworkIcons from '@/components/social-network-icons';
import { Box, Typography } from '@mui/material';

export default function SingUpSocialNetwork() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: { xs: '8px', sm: '8px', md: '8px', lg: '8px', xl: '8px' },
      }}
    >
      <Typography
        component="span"
        textTransform={"uppercase"}
        sx={{
          fontSize: { xs: '10px', sm: '10px', md: '12px', lg: '12px', xl: '12px' },
          fontWeight: 700,
          mr: '8px',
        }}
      >
        или Вы можете написать нам:
      </Typography>
      <SocialNetworkIcons />
    </Box>
  );
}
