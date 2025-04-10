'use client';

import SingUpDrawer from "@/components/sign-up-drawer";
import SingUpModal from "@/components/sign-up-modal";
import { Button } from "@mui/material";
import { useState } from "react";

export default function FooterButtonModalOpen() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: '8px',
          border: '2px solid #FFA700',
          boxShadow: 'none',
          bgcolor: '#fff',
          color: '#5C6571',
          textTransform: 'none',
          px: { xs: '16px', sm: '24px', md: '24px', lg: '24px', xl: '24px' },
          py: { xs: '12px', sm: '12px', md: '12px', lg: '12px', xl: '12px' },
          fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
          lineHeight: { xs: '16px', sm: '20px', md: '20px', lg: '20px', xl: '20px' },
          fontWeight: { xs: 500, sm: 700, md: 700, lg: 700, xl: 700 }, 
          '&:hover': {
            boxShadow: 'none',
            color: '#fff',
            bgcolor: '#FFA700',
          },
        }}
      >
        Заказать звонок
      </Button>

      <SingUpModal open={open} setOpen={setOpen} rootSx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }} />
      <SingUpDrawer open={open} setOpen={setOpen} rootSx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }} />
    </>
  )
}
