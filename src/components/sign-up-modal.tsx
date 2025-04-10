'use client';

import { Box, Modal } from "@mui/material";
import SignUpContainer from "@/components/sign-up-container";

interface SingUpModalProps {
  open: boolean;
  setOpen: any;
  rootSx?: any;
  // text?: string;
}

export default function SingUpModal({ open, setOpen, rootSx }: SingUpModalProps) {
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          ...rootSx,
        }}
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
          <SignUpContainer
            text="Заказать звонок"
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </Box>
  )
}
