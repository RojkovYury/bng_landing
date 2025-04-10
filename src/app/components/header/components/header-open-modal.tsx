'use client';

import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import SignUpContainer from "@/components/sign-up-container";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  p: '0px',
  borderRadius: '20px',
  gap: '20px',
  border: 'none',
  outline: 'none',
};

export default function HeaderOpenModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography
        onClick={handleOpen}
        sx={{
          textWrap: 'nowrap',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '100%',
          color: '#1144AA',
          borderBottom: '1px dashed #1144AA',
          cursor: 'pointer',
          transition: 'border-bottom 0.3s ease, color 0.3s ease',
          '&:hover': {
            color: '#1b75fc',
            borderBottom: '1px dashed #1b75fc',
          },
        }}
      >
        Заказать звонок
      </Typography>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style }}>
          <SignUpContainer text="Заказать звонок" onClose={handleClose}/>
        </Box>
      </Modal>
    </Box>
  )
}
