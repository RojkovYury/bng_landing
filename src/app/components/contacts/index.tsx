'use server'

import { Box } from "@mui/material";
import location from '../../../../public/icons/contacts-icon-location.svg'
import mail from '../../../../public/icons/contacts-icon-mail.svg'
import phone from '../../../../public/icons/contacts-icon-phone.svg'
import ContactsTitle from "./components/contacts-title";
import ContactsGreyBox from "./components/contacts-grey-box";
import ContactsMap from "./components/contacts-map";


export default async function Contacts() {
  return (
    <Box
      id="contacts"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        maxWidth: '1440px',
        width: '100%',
        mb: { xs: '64px', sm: '64px', md: '80px', lg: '80px', xl: '80px' },
      }}
    >
      <ContactsTitle />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
          justifyContent: 'space-between',
          mb: '40px',
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <ContactsGreyBox
          src={location}
          text="300034, Тульская область, г. Тула, ул. Революции, дом 55, офис 202"
          sx={{ 
            mr: { xs: '0px', sm: '0px', md: '0px', lg: '20px', xl: '40px' },
            mb: { xs: '20px', sm: '20px', md: '20px', lg: '0px', xl: '0px' },
          }}
        />
        <ContactsGreyBox
          src={mail}
          text="info@bng-it.ru"
          email
          link="mailto:info@bng-it.ru"
          sx={{ 
            mr: { xs: '0px', sm: '0px', md: '0px', lg: '20px', xl: '40px' },
            mb: { xs: '20px', sm: '20px', md: '20px', lg: '0px', xl: '0px' }, 
          }}
        />
        <ContactsGreyBox
          src={phone}
          text="+7 (933) 028 35 25"
          tel
          link="tel:+79330283525"
          textSx={{ fontWeight: 700 }}
        />
      </Box>

      <ContactsMap />

    </Box>
  )
}
