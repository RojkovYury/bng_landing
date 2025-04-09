'use server';

import { Box, Typography } from "@mui/material";

const TypographyStyle = {
  fontSize: { xs: '12px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
  lineHeight: { xs: '16px', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
  fontWeight: 400, 
};

export default async function FooterInfo () {
  return (
    <Box
      sx={{ display: 'flex',
        justifyContent: 'space-between',
        mb: '32px',
        width: '100%',
        flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row', xl: 'row' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Typography sx={{ ...TypographyStyle, mr: '20px' }}>
          © 2025 ООО БиЭнДжи
        </Typography>
        <Typography sx={TypographyStyle}>
          Все права защищены
        </Typography>
      </Box>

      <Typography sx={{ ...TypographyStyle, mb: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' }, }}>
        Положение о персональных данных
      </Typography>
    </Box>
  )
}
