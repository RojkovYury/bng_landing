import { Typography } from '@mui/material';

export default function SingUpMobileTitle() {
  return (
    <>
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '32px',
          mb: '8px',
          color: '#FFFFFF',
        }}
      >
        Записаться на курс
      </Typography>

      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '22px',
          mb: '40px',
          color: '#FFFFFF',
        }}
      >
        или получить бесплатную консультацию
      </Typography>
    </>
  );
}
