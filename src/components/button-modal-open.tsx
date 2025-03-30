'use client';

import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

interface ButtonModalOpenProps {
  text: string;
  orange?: boolean;
  sx?: any;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  width: '450px',
  height: '436px',
  p: '40px',
  borderRadius: '20px',
  gap: '20px',
};

export default function ButtonModalOpen({ text, orange, sx }: ButtonModalOpenProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: '8px',
          width: orange
            ? '199px'
            : { xs: '160px', sm: '160px', md: '180px', lg: '180px', xl: '180px' },
          height: orange
            ? '52px'
            : { xs: '50px', sm: '50px', md: '56px', lg: '56px', xl: '56px' },
          bgcolor: orange ? '#FFA700' : '#1144AA',
          boxShadow: 'none',

          textTransform: 'none',
          fontSize: orange
            ? '18px'
            : { xs: '18px', sm: '18px', md: '20px', lg: '20px', xl: '20px' },
          fontWeight: 700, 
          lineHeight: orange 
            ? '20px'
            : { xs: '22px', sm: '22px', md: '24px', lg: '24px', xl: '24px' },
          '&:hover': {
            bgcolor: orange ? '#FF7B00' : '#184AAC',
            boxShadow: 'none',
          },
          ...sx,
        }}
      >
        {text}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <Typography>
            Записаться на курс
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
