'use client';

import { Box, Button, Link, Typography } from "@mui/material";
import Image from 'next/image';
import bg from '../../../../public/images/sign-up-mobile-bg.png'
import { useState } from "react";
import SingUpMobileInputName from "./components/sign-up-mobile-input-name";
import SingUpMobileInputPhone from "./components/sign-up-mobile-input-phone";
import SingUpMobileCheckbox from "./components/sign-up-mobile-checkbox";
import SingUpMobileTitle from "./components/sign-up-mobile-title";

export default function SignUpMobile() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState(false);
  /*
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const [errorInput, setErrorInput] = useState('');
  */
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
          <SingUpMobileTitle />
          <SingUpMobileInputName value={name} setValue={setName} />
          <SingUpMobileInputPhone value={phone} setValue={setPhone} />

          <Box sx={{ display: 'flex', mb: '12px' }}>
            <SingUpMobileCheckbox checked={check} setChecked={setCheck} sx={{ mr: '12px' }} />
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '16px',
                fontWeight: 400,
                color: '#F2F5F9',
              }}
            >
              Нажимая кнопку “Отправить”, я соглашаюсь с&nbsp;
              <Link
                href="/"
                underline="hover"
                sx={{
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  fontWeight: 500,
                }}
              >
                положением о персональных данных
              </Link>
              &nbsp;и даю согласие на их обработку и хранение
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
          <Image src={bg} alt="" fill />
        </Box>
      </Box>
    </Box>
  )
}
