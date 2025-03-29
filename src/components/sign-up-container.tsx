'use client'; // ?

import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

interface SignUpContainerProps {
  text: string;
  sx?: any;
}

export default function SignUpContainer({ text, sx }: SignUpContainerProps) {
  return (   
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', bgcolor: '#fff', borderRadius: '20px', ...sx }}>
      <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px', mb: '40px' }}>
        {text}
      </Typography>

      <TextField
        label="Имя"
        variant="outlined"
        sx={{ mb: '20px', height: '52px', borderRadius: '8px' }}
      />

      <TextField
        variant="outlined"
        sx={{ mb: '40px', height: '52px', borderRadius: '8px' }}
      />

      <Button
        variant="contained"
        sx={{
          borderRadius: '8px',
          width: '100%',
          height: '52px',
          bgcolor: '#FFA700',
          boxShadow: 'none',

          textTransform: 'none',
          fontSize: '18px',
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

      <Box sx={{ display: 'flex', mt: '20px' }}>
        <Checkbox />
        <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '16px' }}>
          Нажимая кнопку “Отправить”, я соглашаюсь с положением о персональных данных и даю согласие на их обработку и хранение
        </Typography>
      </Box>
    </Box>
  )
}
