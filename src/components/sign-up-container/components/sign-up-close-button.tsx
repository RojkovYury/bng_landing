import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SingUpInputNameProps {
  onClick: any;
  sx?: any;
}

export default function SingUpCloseButton({ onClick, sx }: SingUpInputNameProps) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        width: '40px',
        height: '40px',
        right: '12px',
        top: '12px',
        ...sx,
      }}
    >
      <CloseIcon sx={{ width: '40px', height: '40px', color: 'rgba(121, 142, 188, 1)' }}/>
    </IconButton>
  );
}
