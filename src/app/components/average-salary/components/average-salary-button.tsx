'use client';

import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

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

export default function AverageSalaryButton() {
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
          width: { xs: '175px', sm: '175px', md: '175px', lg: '199px', xl: '199px' },
          height: { xs: '44px', sm: '44px', md: '44px', lg: '52px', xl: '52px' },
          bgcolor: '#FFA700',
          boxShadow: 'none',

          textTransform: 'none',
          fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
          lineHeight: '20px',
          fontWeight: 700, 
          '&:hover': {
            bgcolor: '#FF7B00',
            boxShadow: 'none',
          },
        }}
      >
        Начать учиться
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
