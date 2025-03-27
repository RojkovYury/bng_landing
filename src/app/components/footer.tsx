'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import logo from '../../../public/logo.svg'
import ButtonModalOpen from "@/components/button-modal-open";

export default async function Footer() {
  return (
    <Box sx={{ maxWidth: '1440px', width: '100%', mx: 'auto', display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '32px' }}>
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
          <Typography sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '16px', maxWidth: '198px' }}>
            Очный класс программирования в Туле
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: 400, lineHeight: '24px', mr: '20px' }}>
            info@bng-it.ru
          </Typography>
          <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', mr: '20px' }}>
            +7 (495) 137-80-79
          </Typography>
          {/* !! */}
          <ButtonModalOpen
            text="Заказать звонок"
            orange
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '32px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '100%', mr: '20px' }}>
            © 2025 ООО БиЭнДжи 
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '100%' }}>
            Все права защищены
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '100%' }}>
          Положение о персональных данных
        </Typography>
      </Box>

    </Box>
  )
}
