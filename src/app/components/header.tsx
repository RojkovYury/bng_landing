'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import logo from '../../../public/logo.svg'
import ButtonModalOpen from "@/components/button-modal-open";

export default async function Header() {
  return (
    <Box sx={{ mt: '20px', maxWidth: '1440px', width: '100%', mx: 'auto', display: 'flex', justifyContent: 'space-between' }}>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', height: '80px', width: '96px', mr: '24px' }}>
          <Image
            layout="responsive"
            src={logo}
            alt={logo}
            width={96}
            height={80}
          />
        </Box>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '16px', maxWidth: '168px' }}>
          Очный класс программирования в Туле
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', height: '64px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '64px', mr: '48px' }}>
          <Box sx={{ display: 'flex', mt: '4px', justifyContent: 'end'}}>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '16px', mr: '40px' }}>
              г. Тула, ул. Революции, дом 55, офис 202
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px' }}>
              info@bng-it.ru
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px', mr: '28px' }}>
              ПРЕИМУЩЕСТВА
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px', mr: '28px' }}>
              ДЛЯ КОГО
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px', mr: '28px' }}>
              ПРОГРАММА
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px', mr: '28px' }}>
              НАСТАВНИКИ
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px', mr: '28px' }}>
              ЦЕНА
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px', mr: '28px' }}>
              FAQ
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px' }}>
              КОНТАКТЫ
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '64px' }}>
          <ButtonModalOpen
            text="+7 (495) 137-80-79"
            orange
            sx={{ width: '208px', height: '40px' }}
          />
          <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', color: '#1144AA' }}>
            Заказать звонок
          </Typography>
        </Box>

      </Box>


    </Box>
  )
}
