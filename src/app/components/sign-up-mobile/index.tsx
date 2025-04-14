'use client';

import { Box, Button, Typography } from "@mui/material";
import Image from 'next/image';
import bg from '../../../../public/images/sign-up-mobile-bg.png'
import { useState } from "react";
import SingUpMobileInputName from "./components/sign-up-mobile-input-name";
import SingUpMobileInputPhone from "./components/sign-up-mobile-input-phone";
import SingUpMobileCheckbox from "./components/sign-up-mobile-checkbox";
import SingUpMobileTitle from "./components/sign-up-mobile-title";
import handleMailer from "@/app/contracts";
import SingUpSnackbar from "@/components/sign-up-container/components/sign-up-snackbar";
import PolicyModal from "@/components/policy-modal";
import SingUpSuccessSnackbar from "@/components/sign-up-container/components/sign-up-success-snackbar";
import SingUpProgress from "@/components/sign-up-container/components/sign-up-progress";

export default function SignUpMobile() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);
  const [message, setMessage] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    await handleMailer({
      name,
      setName,
      phone,
      setPhone,
      check,
      setCheck,
      setMessage,
      setOpenSnackbar,
      setErrorInput,
      setOpenSuccessSnackbar,
      setIsLoading,
    });
  };

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
      {isLoading && (<SingUpProgress />)}

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
          <SingUpMobileInputName value={name} setValue={setName} errorInput={errorInput} setErrorInput={setErrorInput} disabled={isLoading} />
          <SingUpMobileInputPhone value={phone} setValue={setPhone} errorInput={errorInput} setErrorInput={setErrorInput} disabled={isLoading} />

          <Box sx={{ display: 'flex', mb: '12px' }}>
            <SingUpMobileCheckbox checked={check} setChecked={setCheck} sx={{ mr: '12px' }} errorInput={errorInput} setErrorInput={setErrorInput} disabled={isLoading} />
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '16px',
                fontWeight: 400,
                color: '#F2F5F9',
              }}
            >
              Нажимая кнопку “Отправить”, я соглашаюсь с&nbsp;
              <Typography
                component="span"
                onClick={() => setOpenPolicy(true)}
                sx={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: 500,
                  mb: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' },
                  cursor: 'pointer',
                  color: '#F2F5F9',
                  textDecoration: 'underline',
                }}
              >
                положением о персональных данных
              </Typography>
              &nbsp;и даю согласие на их обработку и хранение
            </Typography>
          </Box>

          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              borderRadius: '8px',
              width: '100%',
              height: '44px',
              bgcolor: isLoading ? '#C9D3E8' : '#FFA700',
              boxShadow: 'none',

              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 700, 
              lineHeight: '20px',

              '&:hover': {
                bgcolor: isLoading ? '#C9D3E8' : '#FF7B00',
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
      <SingUpSnackbar message={message} open={openSnackbar} setOpen={setOpenSnackbar} />
      <SingUpSuccessSnackbar open={openSuccessSnackbar} setOpen={setOpenSuccessSnackbar}/>
      <PolicyModal open={openPolicy} setOpen={setOpenPolicy} />
    </Box>
  )
}
