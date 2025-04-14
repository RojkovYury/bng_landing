import { Box, CircularProgress } from '@mui/material';

export default function SingUpProgress() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '19px',
        top: 0,
        left: 0,
        zIndex: 3,
        // bgcolor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <CircularProgress
        size={100}
        sx={{ color: '#FFA700' }}
      />
    </Box>
  );
}
