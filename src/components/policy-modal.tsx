'use client';

import { Box, Modal } from "@mui/material";
import Policy from "../../public/documents/policy";
import SingUpCloseButton from "./sign-up-container/components/sign-up-close-button";

interface PolicyModalProps {
  open: boolean;
  setOpen: any;
  rootSx?: any;
}

export default function PolicyModal({ open, setOpen, rootSx }: PolicyModalProps) {
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
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#fff',
          p: '20px',
          borderRadius: { xs: '0px', sm: '20px' },
          gap: '20px',
          border: 'none',
          outline: 'none',
          width: { xs: 'calc(100% - 40px)', sm: '80%' },
          maxWidth: { xs: 'calc(100% - 40px)', sm: '800px' },
          overflow: 'hidden',
          maxHeight: '80vh',
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: Policy }}
          style={{
            overflowY: 'auto',
            maxHeight: '100%',
            overflowWrap: 'break-word',
          }} 
        />
        <SingUpCloseButton onClick={handleClose} />
      </Box>
    </Modal>
  )
}
