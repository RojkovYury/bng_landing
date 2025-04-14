'use client';

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import SingUpInputPhone from "./components/sign-up-input-phone";
import SingUpInputName from "./components/sign-up-input-name";
import SingUpInputCheckbox from "./components/sign-up-input-checkbox";
import SingUpButton from "./components/sign-up-button";
import SingUpCloseButton from "./components/sign-up-close-button";
import SingUpSnackbar from "./components/sign-up-snackbar";
import handleMailer from "@/app/contracts";
import PolicyModal from "../policy-modal";

interface SignUpContainerProps {
  text: string;
  sx?: any;
  onClose?: any;
  drawer: boolean;
}

export default function SignUpContainer({ text, sx, onClose, drawer }: SignUpContainerProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);
  const [message, setMessage] = useState('');
  const [errorInput, setErrorInput] = useState('');

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
      onClose,
    });
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: '304px', sm: '304px', md: '370px', lg: '370px', xl: '370px' },
        height: { xs: 'inherit', sm: 'inherit', md: '356px', lg: '356px', xl: '356px' },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
        borderRadius: '20px',
        px: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
        py: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '16px', md: '24px', lg: '24px', xl: '24px' },
          lineHeight: { xs: '20px', sm: '20px', md: '32px', lg: '32px', xl: '32px' },
          fontWeight: 700,
          mb: { xs: '32px', sm: '32px', md: '40px', lg: '40px', xl: '40px' },
          width: drawer ? '100%' : 'unset',
          display: drawer ? 'flex' : 'unset',
          justifyContent: drawer ? 'center' : 'unset',
        }}
      >
        {text}
      </Typography>

      <SingUpInputName value={name} setValue={setName} errorInput={errorInput} setErrorInput={setErrorInput} />
      <SingUpInputPhone value={phone} setValue={setPhone} errorInput={errorInput}  setErrorInput={setErrorInput}/>
      <SingUpButton onClick={handleSubmit} />

      <Box sx={{ display: 'flex', mt: '20px' }}>
        <SingUpInputCheckbox checked={check} setChecked={setCheck} sx={{ mr: '12px' }} errorInput={errorInput}  setErrorInput={setErrorInput} />
        <Typography
          sx={{
            fontSize: { xs: '12px', sm: '12px', md: '13px', lg: '13px', xl: '13px' }, // 14 !
            lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
            fontWeight: 400,
          }}
        >
          Нажимая кнопку “Отправить”, я соглашаюсь с&nbsp;
          <Typography
            component="span"
            onClick={() => setOpenPolicy(true)}
            sx={{
              fontSize: { xs: '12px', sm: '12px', md: '13px', lg: '13px', xl: '13px' }, // 14 !
              lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
              fontWeight: 400,
              mb: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' },
              cursor: 'pointer',
              color: '#1144AA',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#3d7bf7',
              },
            }}
          >
            положением о персональных данных
          </Typography>
          &nbsp;и даю согласие на их обработку и хранение
        </Typography>
      </Box>

      {onClose && !drawer && (<SingUpCloseButton onClick={onClose} />)}

      <SingUpSnackbar message={message} open={openSnackbar} setOpen={setOpenSnackbar} />
      <PolicyModal open={openPolicy} setOpen={setOpenPolicy} />
    </Box>
  )
}
