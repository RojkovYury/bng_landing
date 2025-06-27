import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';

interface SingUpSnackbarProps {
  open: boolean;
  setOpen: any;
}

export default function SingUpSuccessSnackbar({ open, setOpen }: SingUpSnackbarProps) {
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
      autoHideDuration={52500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
      }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '450px',
          fontSize: { xs: '14px', sm: '14px', md: '18px', lg: '18px', xl: '18px' },
          mt: { xs: '0px', sm: '-10px', md: '20px', lg: '20px', xl: '20px' },
          ml: { xs: '0px', sm: '-4px', md: '16px', lg: '16px', xl: '16px' },
          mr: { xs: '0px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
          '& .MuiAlert-action': {
            paddingTop: 0,
          },
        }}
      >
        Заявка успешно отправлена
      </Alert>
    </Snackbar>
  );
}
