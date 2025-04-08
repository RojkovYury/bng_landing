'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import location from '../../../../public/icons/contacts-icon-location.svg'
import mail from '../../../../public/icons/contacts-icon-mail.svg'
import phone from '../../../../public/icons/contacts-icon-phone.svg'
import ContactsTitle from "./components/contacts-title";
import ContactsGreyBox from "./components/contacts-grey-box";


export default async function Contacts() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      mx: 'auto',
      maxWidth: '1440px',
      width: '100%',
    }}
  >
      <ContactsTitle />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: '40px',
          width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 32px)', md: 'calc(100% - 40px)', lg: 'calc(100% - 40px)', xl: 'calc(100% - 40px)' },
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <ContactsGreyBox
          src={location}
          text="300034, Тульская область, г. Тула, ул. Революции, дом 55, офис 202"
          sx={{ mr: { xs: '0px', sm: '0px', md: '0px', lg: '40px', xl: '40px' } }}
        />
        <ContactsGreyBox
          src={mail}
          text="info@bng-it.ru"
          sx={{ mr: { xs: '0px', sm: '0px', md: '0px', lg: '40px', xl: '40px' } }}
        />
        <ContactsGreyBox
          src={phone}
          text="+7 933 028 35 25"
          textSx={{ fontWeight: 700 }}
        />
      </Box>

      <Box sx={{ backgroundColor: 'lightgrey', height: '518px', mb: '80px' }}>
        map
      </Box>

    </Box>
  )
}
