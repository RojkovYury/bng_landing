'use client'; // ?? // переименовать?

import { Button } from "@mui/material";

interface ButtonDownloadProps {
  text: string;
  sx?: any;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  minWidth: '450px',
  width: '450px',
  height: '436px',
  p: '40px',
  borderRadius: '20px',
  gap: '20px',
};

export default function ButtonDownload({ text, sx }: ButtonDownloadProps) {
  const handleClick = () => console.log('Downloading...');
  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          textWrap: 'nowrap',
          width: '263px',
          minWidth: '263px',
          height: '44px',
          bgcolor: '#FFFFFF',
          color: '#2F3134',
          boxShadow: 'none',
          border: '2px solid #FF7B00',
          borderRadius: '8px',

          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '20px',

          '&:hover': {
            color: '#FFFFFF',
            bgcolor: '#FF7B00',
            border: 'none',
            boxShadow: 'none',
          },
          ...sx,
        }}
      >
        {text}
      </Button>
    </>
  )
}
