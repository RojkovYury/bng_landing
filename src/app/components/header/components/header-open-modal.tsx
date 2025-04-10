'use client';

import { useState } from "react";
import { Box, Modal } from "@mui/material";
import SignUpContainer from "@/components/sign-up-container";

export default function HeaderOpenModal() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
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
          }}
        >
          <SignUpContainer text="Заказать звонок" onClose={handleClose}/>
        </Box>
      </Modal>
    </Box>
  )
}
