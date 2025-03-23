'use server'

import ButtonBlue from "@/components/button-blue";
import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import developer from '../../../public/images/developer-sign-up.svg'

export default async function DeveloperSignUp() {
  return (
    <Box sx={{ height: '813px', bgcolor: "#fff", display: 'flex' }}>

      <Box sx={{ minWidth: '482px' }}>
        
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

        <ButtonBlue text="Записаться" sx={{ mb: '160px' }} />
        
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
      
      <Box sx={{ display: 'flex', height: '100%', alignItems: 'end' }}>
        <Image
          layout="responsive"
          src={developer}
          alt="developer"
          width={1140}
          height={768}
        />
      </Box>
      
    </Box>
  )
}
