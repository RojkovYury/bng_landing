import { forwardRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';

interface TextMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, TextMaskCustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+7 (#00) 000-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
        placeholder='+7 (___) ___-__-__'
      />
    );
  },
);

interface SingUpMobileInputPhoneProps {
  value: string;
  setValue: (value: string) => void;
  sx?: any;
  errorInput: string;
  setErrorInput: any;
  disabled: boolean;
}

export default function SingUpMobileInputPhone({ value, setValue, sx, errorInput, setErrorInput, disabled }: SingUpMobileInputPhoneProps) {
  const [isFocused, setIsFocused] = useState(false);
  const error = errorInput === 'phone';
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 18) {
      setValue(event.target.value);
      setErrorInput('');
    }
  };

  return (
    <>
      <Input
        value={value}
        onChange={handleChange}
        inputComponent={TextMaskCustom as any}
        disableUnderline
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
          type: 'tel',
        }}
        sx={{
          borderRadius: '8px',
          px: { xs: '16px', sm: '16px', md: '24px', lg: '24px', xl: '24px' },
          pt: { xs: '6px', sm: '6px', md: '10px', lg: '10px', xl: '10px' }, // -6
          pb: { xs: '6px', sm: '6px', md: '9px', lg: '9px', xl: '9px' }, // -7
          bgcolor: !disabled ? '#F2F5F9' : '#C9D3E8',
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

          mb: { xs: '32px', sm: '32px', md: '40px', lg: '40px', xl: '40px' },
          ...sx,
        }}
      />
    </>
  );
}
