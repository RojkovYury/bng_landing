'use client';

import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

interface ButtonBlueProps {
  text: string;
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

export default function ButtonBlue({ text, sx }: ButtonBlueProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          width: '180px',
          height: '56px',
          bgcolor: '#1144AA',
          boxShadow: 'none',

          textTransform: 'none',
          fontSize: '20px', 
          fontWeight: 700, 
          lineHeight: '24px',

          '&:hover': {
            bgcolor: '#184AAC',
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
