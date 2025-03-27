'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import location from '../../../public/icons/contacts-icon-location.svg'
import mail from '../../../public/icons/contacts-icon-mail.svg'
import phone from '../../../public/icons/contacts-icon-phone.svg'


export default async function Contacts() {
  return (
    <Box sx={{ maxWidth: '1440px', width: '100%', mx: 'auto', display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ display: 'flex', mb: '80px' }}>
        <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', color: '#FFA700' }}>
          Контакты&nbsp;
        </Typography>
        <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}>
          нашего офиса
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '40px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', px: '40px', py: '20px', bgcolor: '#F2F5F9', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex', height: '40px', width: '40px', mr: '20px' }}>
            <Image
              layout="responsive"
              src={location}
              alt={location}
              width={40}
              height={40}
            />
          </Box>
          <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
            300034, Тульская область, г. Тула, ул. Революции, дом 55, офис 202
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', px: '40px', py: '20px', bgcolor: '#F2F5F9', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex', height: '40px', width: '40px', mr: '20px' }}>
            <Image
              layout="responsive"
              src={mail}
              alt={mail}
              width={40}
              height={40}
            />
          </Box>
          <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
            info@bng-it.ru
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', px: '40px', py: '20px', bgcolor: '#F2F5F9', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex', height: '40px', width: '40px', mr: '20px' }}>
            <Image
              layout="responsive"
              src={phone}
              alt={phone}
              width={40}
              height={40}
            />
          </Box>
          <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '24px' }}>
            +7 (495) 137-80-79
          </Typography>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'lightgrey', height: '518px', mb: '80px' }}>
        map
      </Box>

    </Box>
  )
}
