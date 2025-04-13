import { useState } from 'react';
import Input from '@mui/material/Input';

interface SingUpInputNameProps {
  value: string;
  setValue: (value: string) => void;
  sx?: any;
  errorInput: string;
  setErrorInput: any;
}

export default function SingUpInputName({ value, setValue, sx, errorInput, setErrorInput }: SingUpInputNameProps) {
  const [isFocused, setIsFocused] = useState(false);
  const error = errorInput === 'name';
  return (
    <Input
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setErrorInput('');
      }}
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
        border: error
          ? '1px solid #DE3745'
          : isFocused || value
            ? '1px solid #798EBC'
            : '1px solid #F2F5F9',

        fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px', xl: '16px' },
        lineHeight: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
        color: '#2F3134',
        fontFamily: '__Montserrat_47416d',

        transition: 'border 0.3s ease',
        '&:hover': {
          border: error ? '1px solid #DE3745' : '1px solid #798EBC',
        },

        mb: '20px',
        ...sx,
      }}
    />
  );
}
