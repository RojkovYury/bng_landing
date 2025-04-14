'use client';

import { Box, Modal } from "@mui/material";
import Policy from "../../public/documents/policy";
import SingUpCloseButton from "./sign-up-container/components/sign-up-close-button";

interface SingUpModalProps {
  open: boolean;
  setOpen: any;
  rootSx?: any;
}

export default function PolicyModal({ open, setOpen, rootSx }: SingUpModalProps) {
  const handleClose = () => setOpen(false);
  return (
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
          left: '20%',
          transform: 'translate(-12%, -50%)',
          bgcolor: '#fff',
          p: '20px',
          borderRadius: '20px',
          gap: '20px',
          border: 'none',
          outline: 'none',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: Policy }} />
        <SingUpCloseButton onClick={handleClose} />
      </Box>
    </Modal>
  )
}
