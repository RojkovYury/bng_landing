'use client';

import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { useState } from "react";
import SingUpInputPhone from "./sign-up-input-phone";
import SingUpInputName from "./sign-up-input-name";
import SingUpInputCheckbox from "./sign-up-input-checkbox";
import CloseIcon from '@mui/icons-material/Close';

interface SignUpContainerProps {
  text: string;
  sx?: any;
  onClose?: any;
}

export default function SignUpContainer({ text, sx, onClose }: SignUpContainerProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState(false);
  return (   
    <Box
      sx={{
        width: { xs: '100%', sm: '100%', md: '370px', lg: '370px', xl: '370px' },
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

      <Button
        variant="contained"
        sx={{
          borderRadius: '8px',
          width: '100%',
          height: { xs: '44px', sm: '44px', md: '52px', lg: '52px', xl: '52px' },
          minHeight: { xs: '44px', sm: '44px', md: '52px', lg: '52px', xl: '52px' },
          bgcolor: '#FFA700',
          boxShadow: 'none',

          textTransform: 'none',
          fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px', xl: '18px' },
          lineHeight: '20px',

          '&:hover': {
            bgcolor: '#FF7B00',
            boxShadow: 'none',
          },
        }}
      >
        Отправить
      </Button>

      <Box
        sx={{
          display: 'flex',
          mt: '20px',
        }}
      >
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

      {onClose && (
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            right: '12px',
            top: '12px',
          }}
        >
          <CloseIcon sx={{ width: '40px', height: '40px', color: 'rgba(121, 142, 188, 1)' }}/>
        </IconButton>
      )}
    </Box>
  )
}
