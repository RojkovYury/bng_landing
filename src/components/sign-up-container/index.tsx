'use client';

import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";
import SingUpInputPhone from "./components/sign-up-input-phone";
import SingUpInputName from "./components/sign-up-input-name";
import SingUpInputCheckbox from "./components/sign-up-input-checkbox";
import SingUpButton from "./components/sign-up-button";
import SingUpCloseButton from "./components/sign-up-close-button";

interface SignUpContainerProps {
  text: string;
  sx?: any;
  onClose?: any;
}

export default function SignUpContainer({ text, sx, onClose }: SignUpContainerProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState(false);
  const [message, setMessage] = useState('');

  const handleMailer = async () => {
    const response = await fetch('/api/messenger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone }),
    });
    const data = await response.json();
    if (response.ok) { setMessage('Заявка успешно отправлена'); }
    else { setMessage(`Error: ${data.message}`); }
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
        }}
      >
        {text}
      </Typography>

      <SingUpInputName value={name} setValue={setName} />
      <SingUpInputPhone value={phone} setValue={setPhone} />
      <SingUpButton onClick={handleMailer}/>

      <Box sx={{ display: 'flex', mt: '20px' }}>
        <SingUpInputCheckbox checked={check} setChecked={setCheck} sx={{ mr: '12px' }}/>
        <Typography
          sx={{
            fontSize: { xs: '12px', sm: '12px', md: '13px', lg: '13px', xl: '13px' }, // 14 !
            lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
            fontWeight: 400,
          }}
        >
          Нажимая кнопку “Отправить”, я соглашаюсь с&nbsp;
          <Link
            href="/"
            underline="hover"
            sx={{ color: '#1144AA' }}
          >
            положением о персональных данных
          </Link>
          &nbsp;и даю согласие на их обработку и хранение
        </Typography>
      </Box>

      {onClose && (<SingUpCloseButton onClick={onClose} />)}
    </Box>
  )
}
