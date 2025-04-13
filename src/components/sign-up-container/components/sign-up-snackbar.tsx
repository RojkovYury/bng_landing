import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';

interface SingUpSnackbarProps {
  open: boolean;
  setOpen: any;
  message: string;
}

export default function SingUpSnackbar({ open, setOpen, message }: SingUpSnackbarProps) {
  const currentSeverity = message == 'Заявка успешно отправлена' ? 'success' : 'error';
  console.log(message);
  console.log(currentSeverity);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') { return; }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <Alert
        onClose={handleClose}
        severity={currentSeverity}
        variant="filled"
        sx={{
          width: '100%',
          maxWidth: '370px',
          mt: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: '20px' },
          ml: { xs: '0px', sm: '-4px', md: '16px', lg: '16px', xl: '16px' },
          mr: { xs: '0px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
