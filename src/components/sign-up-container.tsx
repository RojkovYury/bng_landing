'use client'; // ?

import { Box, Checkbox, TextField, Typography } from "@mui/material";
import ButtonDownload from "./button-download";
import ButtonModalOpen from "./button-modal-open";

interface SignUpContainerProps {
  text?: string;
  sx?: any;
}

export default function SignUpContainer({ text, sx }: SignUpContainerProps) {
  return (   
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '370px', height: '356px', p: '40px', bgcolor: '#fff', borderRadius: '20px', ...sx }}>
      
      <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px', mb: '40px' }}>
        {text}
      </Typography>

      <TextField
        label="Имя"
        variant="outlined"
        sx={{  mb: '20px' }}
      />

      <TextField
        variant="outlined"
        sx={{  mb: '40px' }}
      />

      <ButtonModalOpen
        text="Отправить"
        orange
        sx={{ width: '100%' }}
      />

      <Box sx={{ display: 'flex', mt: '20px' }}>
        <Checkbox />
        <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '16px' }}>
          Нажимая кнопку “Отправить”, я соглашаюсь с положением о персональных данных и даю согласие на их обработку и хранение
        </Typography>
      </Box>

    </Box>
  )
}
