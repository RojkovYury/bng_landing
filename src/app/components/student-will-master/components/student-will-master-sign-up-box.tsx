'use client';

import SignUpContainer from "@/components/sign-up-container";
import SingUpSuccessSnackbar from "@/components/sign-up-container/components/sign-up-success-snackbar";
import { Box } from "@mui/material";
import { useState } from "react";

export default function StudentWillMasterSignUpBox() {
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        mx: { xs: 'auto', sm: 'auto', md: '20px', lg: '20px', xl: '0px' }
      }}
    >
      <SignUpContainer
        text="Записаться на курс"
        setOpenSuccessSnackbar={setOpenSuccessSnackbar}
        sx={{
          width: { xs: '100%', sm: '100%', md: '370px', lg: '370px', xl: '370px' },
        }}
      />
      <SingUpSuccessSnackbar open={openSuccessSnackbar} setOpen={setOpenSuccessSnackbar}/>
    </Box>
  )
}
