import { Button } from '@mui/material';

interface SingUpInputNameProps {
  onClick: any;
  disabled: boolean;
}

export default function SingUpButton({ onClick, disabled }: SingUpInputNameProps) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        borderRadius: '8px',
        width: '100%',
        height: { xs: '44px', sm: '44px', md: '52px', lg: '52px', xl: '52px' },
        minHeight: { xs: '44px', sm: '44px', md: '52px', lg: '52px', xl: '52px' },
        bgcolor: disabled ? '#C9D3E8' : '#FFA700',
        boxShadow: 'none',

        textTransform: 'none',
        fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px', xl: '18px' },
        lineHeight: '20px',

        '&:hover': {
          bgcolor: disabled ? '#C9D3E8' : '#FF7B00',
          boxShadow: 'none',
        },
      }}
    >
      Отправить
    </Button>
  );
}
