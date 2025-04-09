'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import developer from '../../../public/images/developer-sign-up.svg'
import ButtonModalOpen from "@/components/button-modal-open";

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '48px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '56px', lg: '56px', xl: '56px' },
  fontWeight: 700,
};

const numberTypography = {
  fontSize: { xs: '48px', sm: '48px', md: '64px', lg: '64px', xl: '64px' },
  lineHeight: { xs: '56px', sm: '56px', md: '72px', lg: '72px', xl: '72px' },
  fontWeight: 700,
  color: '#FFA700',
};

const numberTextTopTypography = {
  fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '16px', xl: '16px' },
  lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
  fontWeight: 400,
  color: '#5C6571',
};

const numberTextBottomTypography = {
  fontSize: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
  fontWeight: 700,
  color: '#FFA700',
};

export default async function DeveloperSignUp() {
  return (
    <Box
      sx={{
        maxWidth: '1440px',
        width: '100%',
        mx: 'auto',
        height: { xs: '709px', sm: '709px', md: '813px', lg: '813px', xl: '813px' }, // 813 709
        bgcolor: "#fff",
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
        alignItems: { xs: 'center', sm: 'center', md: 'inherit', lg: 'inherit', xl: 'inherit' },
      }}
    >
      <Box
        sx={{
          minWidth: { xs: '0', sm: '0', md: '406px', lg: '482px', xl: '482px' },
          mr: { xs: '20px', sm: '0px', md: '0px', lg: '0px', xl: '58px' },
          ml: { xs: '20px', sm: '0px', md: '20px', lg: '20px', xl: '0px' },
          mt: { xs: '32px', sm: '32px', md: '130px', lg: '182px', xl: '182px' },
        }}
      > 
        <Box sx={{ display: 'flex', mb: { xs: '20px', sm: '20px', md: '32px', lg: '32px', xl: '32px' }, mx: { xs: '0px', sm: '0px' } }}>
          <Typography sx={{ ...titleTypography, color: '#FFA700' }}>C#&nbsp;</Typography>
          <Typography sx={{ ...titleTypography }}> - разработчик</Typography>
        </Box>

        <Box
          sx={{
            maxWidth: { xs: '343px', sm: '343px', md: '482px', lg: '482px', xl: '482px' },
            mb: { xs: '40px', sm: '40px', md: '64px', lg: '64px', xl: '64px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '16px', md: '24px', lg: '24px', xl: '24px' },
              lineHeight: { xs: '22px', sm: '22px', md: '32px', lg: '32px', xl: '32px' },
            }}
          >
            Освойте разработку веб-сайтов, серверных, настольных и мобильных приложений с использованием языка программирования C# в Туле
          </Typography>
        </Box>

        <ButtonModalOpen
          text="Записаться"
          sx={{
            mb: { xs: '80px', sm: '80px', md: '80px', lg: '160px', xl: '160px' },
          }}
        />
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', mr: { xs: '40px', sm: '40px', md: '40px', lg: '64px', xl: '64px' } }}>
            <Typography sx={{ ...numberTypography }}>3</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: '12px' }}>
              <Typography sx={{ ...numberTextTopTypography }}>ДЛИТЕЛЬНОСТЬ</Typography>
              <Typography sx={{ ...numberTextBottomTypography }}>МЕСЯЦА</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex' }}>
          <Typography sx={{ ...numberTypography }}>21</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: '12px' }}>
              <Typography sx={{ ...numberTextTopTypography }}>ДАТА СТАРТА</Typography>
              <Typography sx={{ ...numberTextBottomTypography }}>АПРЕЛЯ</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: '100%',
          width: { xs: '450px', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
          maxWidth: '1140px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: { xs: 'absolute', sm: 'absolute', md: 'absolute', lg: 'absolute', xl: 'absolute' },
            width: { xs: '450px', sm: '100%', md: '1140px', lg: '1140px', xl: '1140px' },
            height: { xs: '303px', sm: '100%', md: '768px', lg: '768px', xl: '768px' },
            bottom: 0,
            left: { xs: '0px', sm: '0px', md: '300px', lg: '-130px', xl: '0px' },
          }}
        >
          <Image src={developer} alt="developer" fill />
        </Box>
      </Box>
    </Box>
  )
}
