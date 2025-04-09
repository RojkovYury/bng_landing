import { useState } from 'react';
import Input from '@mui/material/Input';

interface SingUpMobileInputNameProps {
  value: string;
  setValue: (value: string) => void;
  sx?: any;
}

export default function SingUpMobileInputName({ value, setValue, sx }: SingUpMobileInputNameProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <Input
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        disableUnderline
        placeholder='Имя'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        sx={{
          borderRadius: '8px',
          px: { xs: '16px', sm: '16px', md: '24px', lg: '24px', xl: '24px' },
          pt: { xs: '6px', sm: '6px', md: '10px', lg: '10px', xl: '10px' }, // -6
          pb: { xs: '6px', sm: '6px', md: '9px', lg: '9px', xl: '9px' }, // -7
          bgcolor: '#F2F5F9',
          border: isFocused || value ? '1px solid #798EBC' : '1px solid #F2F5F9',

          fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px', xl: '16px' },
          lineHeight: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
          color: '#2F3134',
          fontFamily: '__Montserrat_47416d',

          transition: 'border 0.3s ease',
          '&:hover': {
            border: '1px solid #798EBC'
          },

          mb: '20px',
          ...sx,
        }}
      />
    </>
  );
}
