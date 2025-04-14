'use client';

import { useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import SignUpContainer from "@/components/sign-up-container";
import SingUpSuccessSnackbar from "./sign-up-container/components/sign-up-success-snackbar";

interface SingUpDrawerProps {
  open: boolean;
  setOpen: any;
  rootSx: any;
}

export default function SingUpDrawer({ open, setOpen, rootSx }: SingUpDrawerProps) {
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={true}
        // keepMounted
        sx={{
          ...rootSx,
          '& .MuiDrawer-paperAnchorBottom': {
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: '80px', height: '4px', bgcolor: 'rgba(121, 142, 188, 1)', mt: '24px', mb: '12px' }}/>
        </Box>
        <SignUpContainer
          text="Заказать звонок"
          setOpenSuccessSnackbar={setOpenSuccessSnackbar}
          sx={{ mx: 'auto' }}
          onClose={toggleDrawer(false)}
          drawer
        />
        <Box sx={{ width: '100%', height: '260px' }} />
      </SwipeableDrawer>
      <SingUpSuccessSnackbar open={openSuccessSnackbar} setOpen={setOpenSuccessSnackbar}/>
    </>
  )
}
