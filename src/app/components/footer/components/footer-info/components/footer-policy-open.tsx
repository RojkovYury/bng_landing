'use client';

import PolicyModal from "@/components/policy-modal";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function FooterPolicyOpen () {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography
        onClick={() => setOpen(true)}
        sx={{
          fontSize: { xs: '12px', sm: '16px', md: '16px', lg: '16px', xl: '16px' },
          lineHeight: { xs: '16px', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
          fontWeight: 400, 
          mb: { xs: '12px', sm: '12px', md: '0px', lg: '0px', xl: '0px' },
          cursor: 'pointer',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#1144AA',
          },
        }}
      >
        Положение о персональных данных
      </Typography>
      <PolicyModal open={open} setOpen={setOpen} />
    </>
  )
}
