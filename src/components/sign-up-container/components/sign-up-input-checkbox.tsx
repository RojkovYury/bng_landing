import { Box } from '@mui/material';
import Image from 'next/image';
import checkboxIcon from '../../../../public/icons/checkbox.svg'

interface SingUpInputCheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  blue?: boolean;
  sx?: any;
  errorInput: string;
  setErrorInput: any;
}

export default function SingUpInputCheckbox({ checked, setChecked, blue, sx, errorInput, setErrorInput }: SingUpInputCheckboxProps) {
  const primaryColor = blue ? '#1144AA' : '#FFA700';
  const error = errorInput === 'check';
  return (
    <Box
      onClick={() => {
        setChecked(!checked);
        setErrorInput('');
      }}
      sx={{
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: error
        ? '1px solid #DE3745'
        : checked
          ? `1px solid ${primaryColor}`
          : '1px solid #B3B9C3',


        width: { xs: '22px', sm: '22px', md: '28px', lg: '28px', xl: '28px' },
        height: { xs: '22px', sm: '22px', md: '28px', lg: '28px', xl: '28px' },
        minWidth: { xs: '22px', sm: '22px', md: '28px', lg: '28px', xl: '28px' },
        minHeight: { xs: '22px', sm: '22px', md: '28px', lg: '28px', xl: '28px' },
        backgroundColor: checked ? `${primaryColor}` : '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, border 0.3s ease',
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '13px', sm: '13px', md: '16px', lg: '16px', xl: '16px' },
          height: { xs: '13px', sm: '13px', md: '16px', lg: '16px', xl: '16px' },
          userSelect: 'none',
        }}
      >
        <Image src={checkboxIcon} alt="" fill />
      </Box>

    </Box>
  );
}
