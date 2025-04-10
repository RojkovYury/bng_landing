'use client';

import { Button } from "@mui/material";
import { useState } from "react";
import SingUpModal from "./sign-up-modal";
import SingUpDrawer from "./sign-up-drawer";

interface ButtonModalOpenProps {
  text: string;
  orange?: boolean;
  sx?: any;
}

export default function ButtonModalOpen({ text, orange, sx }: ButtonModalOpenProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: '8px',
          width: orange
            ? '199px'
            : { xs: '160px', sm: '160px', md: '180px', lg: '180px', xl: '180px' },
          height: orange
            ? '52px'
            : { xs: '50px', sm: '50px', md: '56px', lg: '56px', xl: '56px' },
          bgcolor: orange ? '#FFA700' : '#1144AA',
          boxShadow: 'none',

          textTransform: 'none',
          fontSize: orange
            ? '18px'
            : { xs: '18px', sm: '18px', md: '20px', lg: '20px', xl: '20px' },
          fontWeight: 700, 
          lineHeight: orange 
            ? '20px'
            : { xs: '22px', sm: '22px', md: '24px', lg: '24px', xl: '24px' },
          '&:hover': {
            bgcolor: orange ? '#FF7B00' : '#184AAC',
            boxShadow: 'none',
          },
          ...sx,
        }}
      >
        {text}
      </Button>

      <SingUpModal open={open} setOpen={setOpen} rootSx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }} />
      <SingUpDrawer open={open} setOpen={setOpen} rootSx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }}/>
    </>
  )
}
