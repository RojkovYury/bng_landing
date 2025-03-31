'use server'

import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import Image from 'next/image';
import bg from '../../../public/images/sign-up-mobile-bg.png'

export default async function SignUpMobile() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        bgcolor: "#1144AA",
        display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          maxWidth: '343px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          mr: 'auto',
          ml: 'auto',
          my: '32px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            zIndex: 2,
          }}
        >
          <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px', mb: '8px', color: '#FFFFFF' }}>
            Записаться на курс
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '22px', mb: '40px', color: '#FFFFFF' }}>
            или получить бесплатную консультацию
          </Typography>

          <input
            type="text"
            placeholder="Имя"
            style={{
              height: '40px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '16px',
              border: '1px solid #798EBC',
              borderRadius: '8px',
              boxSizing: 'border-box',
              outline: 'none',
              fontFamily: '__Montserrat_47416d',
              marginBottom: '20px',
            }}
          />

          <input
            type="text"
            placeholder=""
            style={{
              height: '40px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '16px',
              border: '1px solid #798EBC',
              borderRadius: '8px',
              boxSizing: 'border-box',
              outline: 'none',
              marginBottom: '32px',
              fontFamily: '__Montserrat_47416d',
            }}
          />
          
          <Box sx={{ display: 'flex', pb: '12px' }}>
            <Checkbox sx={{ color: '#B3B9C3' }}/>
            <Typography sx={{ fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: '#F2F5F9' }}>
              Нажимая кнопку “Отправить”, я соглашаюсь с положением о персональных данных и даю согласие на их обработку и хранение
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: '8px',
              width: '100%',
              height: '44px',
              bgcolor: '#FFA700',
              boxShadow: 'none',

              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 700, 
              lineHeight: '20px',

              '&:hover': {
                bgcolor: '#FF7B00',
                boxShadow: 'none',
              },
            }}
          >
            Отправить
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            width: { xs: '350px', sm: '350px' },
            height: { xs: '290px', sm: '290px' },
            top: -52,
            left: 0,
            zIndex: 0,
          }}
        >
          <Image src={bg} alt="" layout="fill" objectFit="contain" />
        </Box>
      </Box>
    </Box>
  )
}
