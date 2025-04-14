'use client';

import SingUpDrawer from "@/components/sign-up-drawer";
import SingUpModal from "@/components/sign-up-modal";
import { Button } from "@mui/material";
import { useState } from "react";

export default function AverageSalaryButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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
        Хочу к вам
      </Button>

      <SingUpModal open={open} setOpen={setOpen} rootSx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }} />
      <SingUpDrawer open={open} setOpen={setOpen} rootSx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }}/>
    </>
  )
}
