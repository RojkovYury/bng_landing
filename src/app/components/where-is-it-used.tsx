'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import dashboard from '../../../public/images/where-is-it-used.svg'

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '46px', lg: '46px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '54px', lg: '54px', xl: '56px' },
  fontWeight: 700,
}

const textTypography = {
  fontSize: { xs: '16px', sm: '16px', md: '22px', lg: '22px', xl: '24px' },
  lineHeight: { xs: '20px', sm: '20px', md: '30px', lg: '30px', xl: '32px' },
}

export default async function WhereIsItUsed() {
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        mr: { xs: '0px', sm: 'auto', md: '0px', lg: '20px', xl: 'auto' },
        ml: { xs: '0px', sm: 'auto', md: '20px', lg: '20px', xl: 'auto' },
        mt: { xs: '64px', sm: '64px', md: '80px', lg: '80px', xl: '120px' },
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '343px', sm: '343px', md: '704px', lg: 'inherit', xl: 'inherit' },
          minWidth: { xs: 'inherit', sm: 'inherit', md: '704px', lg: '650px', xl: '704px' },
          mt: { xs: '0px', sm: '0px', md: '0px', lg: '92px', xl: '92px' },
        }}
        >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
            mb: { xs: '32px', sm: '32px', md: '80px', lg: '80px', xl: '80px' },
          }}
        >
          <Typography sx={{ ...titleTypography }}>Где применяется&nbsp;</Typography>
          <Typography sx={{ ...titleTypography, color: '#FFA700' }}>язык С#</Typography>
        </Box>

        <Box sx={{ mb: '20px' }}>
          <Typography sx={{ ...textTypography }}>На C# разрабатывают высоконагруженные веб-сайты,</Typography>
          <Typography sx={{ ...textTypography }}>мобильные и настольные приложения, а также игры</Typography>
        </Box>

        <Box sx={{ mb: { xs: '40px', sm: '40px', md: '64px', lg: '64px', xl: '64px' } }}>
          <Typography sx={{ ...textTypography, fontWeight: 500 }}>
            Освоив этот язык, вы сможете создавать все это и претендовать на высокооплачиваемую работу
          </Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          width: { xs: '343px', sm: '343px', md: '704px', lg: '704px', xl: '704px' },
          height: { xs: '229px', sm: '229px', md: '470px', lg: '470px', xl: '470px' },
          maxWidth: { xs: '343px', sm: '343px', md: '704px', lg: 'inherit', xl: 'inherit' },
          mr: { xs: '0px', sm: '0px', md: '0px', lg: '20px', xl: '20px' },
        }}
      >
        <Image src={dashboard} alt="dashboard" layout="fill" objectFit="contain" />
      </Box>
    </Box>
  )
}
