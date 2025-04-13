'use server';

import SignUpContainer from "@/components/sign-up-container";
import { Box } from "@mui/material";

export default async function ContactsMap() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          backgroundColor: 'lightgrey',
          height: '518px',
          mb: { xs: '32px', sm: '32px', md: '0px', lg: '0px', xl: '0px' },
          borderRadius: '8px',
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
          '& .popup._type_normal._position_top': {
            bgcolor: 'red',
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.581067%2C54.192753&mode=search&whatshere%5Bpoint%5D=37.585811%2C54.192142&whatshere%5Bzoom%5D=17&z=16"
            width="100%"
            height="100%"
            allowFullScreen={true}
            style={{
              position: 'relative',
              border: 'none',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          />
        </Box>
        <Box sx={{ width: '100%', height: '100%', display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.585667%2C54.192753&mode=search&whatshere%5Bpoint%5D=37.585811%2C54.192142&whatshere%5Bzoom%5D=17&z=16"
            width="100%"
            height="100%"
            allowFullScreen={true}
            style={{
              position: 'relative',
              border: 'none',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
            position: 'absolute',
            left: '40px',
            top: '40px',
          }}
        >
          <SignUpContainer text="Обратный звонок"/>
        </Box>
      </Box>

      {/* Mobile */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
          mx: 'auto',
        }}
      >
        <SignUpContainer text="Обратный звонок" sx={{ boxShadow: '0px 12px 20px 0px #13264D1F' }} />
      </Box>
    </>
  )
}
