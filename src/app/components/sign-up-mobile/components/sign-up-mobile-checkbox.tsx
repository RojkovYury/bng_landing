import { Box } from '@mui/material';
import Image from 'next/image';
import checkboxIcon from '../../../../../public/icons/checkbox.svg'

interface SingUpMobileCheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  blue?: boolean;
  sx?: any;
  errorInput: string;
  setErrorInput: any;
  disabled: boolean;
}

export default function SingUpMobileCheckbox({ checked, setChecked, blue, sx, errorInput, setErrorInput, disabled }: SingUpMobileCheckboxProps) {
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
        border: disabled
          ? '1px solid #C9D3E8'
          : error
            ? '1px solid #DE3745'
            : checked
              ? `1px solid ${primaryColor}`
              : '1px solid #B3B9C3',

        width: '22px',
        height: '22px',
        minWidth: '22px',
        minHeight: '22px',
        backgroundColor: disabled
          ? '#C9D3E8'
          : checked
            ? `${primaryColor}`
            : 'rgba(255, 255, 255, 0.3)',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, border 0.3s ease',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: checked ? 'block' : 'none',
          position: 'relative',
          width: '13px',
          height: '13px',
          userSelect: 'none',
        }}
      >
        <Image src={checkboxIcon} alt="" fill/>
      </Box>

    </Box>
  );
}
