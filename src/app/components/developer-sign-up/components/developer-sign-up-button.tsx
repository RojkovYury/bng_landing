'use client';

import { Button } from "@mui/material";
import { useState } from "react";
import SingUpModal from "../../../../components/sign-up-modal";
import SingUpDrawer from "../../../../components/sign-up-drawer";

export default function DeveloperSignUpButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: '8px',
          width: { xs: '160px', sm: '160px', md: '180px', lg: '180px', xl: '180px' },
          height: { xs: '50px', sm: '50px', md: '56px', lg: '56px', xl: '56px' },
          bgcolor: '#1144AA',
          boxShadow: 'none',
          mb: { xs: '80px', sm: '80px', md: '80px', lg: '160px', xl: '160px' },

          textTransform: 'none',
          fontSize: { xs: '18px', sm: '18px', md: '20px', lg: '20px', xl: '20px' },
          fontWeight: 700, 
          lineHeight: { xs: '22px', sm: '22px', md: '24px', lg: '24px', xl: '24px' },
          '&:hover': {
            bgcolor: '#184AAC',
            boxShadow: 'none',
          },
        }}
      >
        Записаться
      </Button>

      <SingUpModal open={open} setOpen={setOpen} rootSx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }} />
      <SingUpDrawer open={open} setOpen={setOpen} rootSx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }}/>
    </>
  )
}
