'use client'; // переименовать?

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
          width: orange ? '199px' : '180px',
          height: orange ? '52px' : '56px',
          bgcolor: orange ? '#FFA700' : '#1144AA',
          boxShadow: 'none',

          textTransform: 'none',
          fontSize: orange ? '18px' : '20px',
          fontWeight: 700, 
          lineHeight: orange ? '20px' : '24px',

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
