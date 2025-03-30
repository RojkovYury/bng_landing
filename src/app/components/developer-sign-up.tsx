'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import developer from '../../../public/images/developer-sign-up.svg'
import ButtonModalOpen from "@/components/button-modal-open";

export default async function DeveloperSignUp() {
  return (
    <Box sx={{ maxWidth: '1440px', width: '100%', mx: 'auto', height: '813px', bgcolor: "#fff", display: 'flex' }}>

      <Box
        sx={{
          minWidth: '482px',
          mr: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '58px' },
          ml: { xs: '16px', sm: '20px', md: '20px', lg: '20px', xl: '0px' },
        }}
      > 
        
        <Box sx={{ display: 'flex', mb: '32px', mt: '182px' }}>
          <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', color: '#FFA700' }}>C#&nbsp;</Typography>
          <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}> - разработчик</Typography>
        </Box>

        <Box sx={{ mb: '64px' }}>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px' }}>Освойте разработку веб-сайтов,</Typography>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px' }}>серверных, настольных и мобильных</Typography>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px' }}>приложений с использованием языка</Typography>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px' }}>программирования C# в Туле</Typography>
        </Box>

        <ButtonModalOpen text="Записаться" sx={{ mb: '160px' }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', mr: '64px' }}>
            <Typography sx={{ fontSize: '64px', fontWeight: 700, lineHeight: '72px', color: '#FFA700' }}>
              3
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: '12px' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', color: '#5C6571' }}>
                ДЛИТЕЛЬНОСТЬ
              </Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: '#FFA700' }}>
                МЕСЯЦА
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex' }}>
          <Typography sx={{ fontSize: '64px', fontWeight: 700, lineHeight: '72px', color: '#FFA700' }}>
              21
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: '12px' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', color: '#5C6571' }}>
                  ДАТА СТАРТА
              </Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: '#FFA700' }}>
                АПРЕЛЯ
              </Typography>
            </Box>
          </Box>
        </Box>

      </Box>
      
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          height: '100%',
          width: '100%',
          maxWidth: '1140px',
        }}
      >
        <Box
          sx={{
            // border: '1px solid green',
            display: 'flex',
            position: 'absolute',
            // position: 'relative',
            width: { xs: '100%', sm: '100%', md: '100%', lg: '1140px', xl: '1140px' },
            height: { xs: '100%', sm: '100%', md: '100%', lg: '768px', xl: '768px' },
            bottom: 0,
            left: { xs: '0px', sm: '0px', md: '0px', lg: '-130px', xl: '0px' },
          }}
        >
          <Image src={developer} alt="developer" layout="fill" objectFit="contain" />
        </Box>
      </Box>
    </Box>
  )
}

/*
          width={1140}
          height={768}
*/

/*
        <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              // width: { xs: '53px', sm: '92px', md: '92px', lg: '92px', xl: '92px' },
              // height: { xs: '44px', sm: '77px', md: '77px', lg: '77px', xl: '77px' },
              // mr: { xs: '24px', sm: '24px', md: '24px', lg: '24px', xl: '24px' },
              height: '100%',
              width: '1140px'
            }}
          >
          <Image src={developer} alt="developer" layout="fill" objectFit="contain" />
        </Box> 

*/