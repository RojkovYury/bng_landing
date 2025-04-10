'use client';

import { Box, SwipeableDrawer } from "@mui/material";
import SignUpContainer from "@/components/sign-up-container";

interface SingUpDrawerProps {
  open: boolean;
  setOpen: any;
  rootSx: any;
  // text?: string;
}

export default function SingUpDrawer({ open, setOpen, rootSx }: SingUpDrawerProps) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
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
        sx={{ mx: 'auto' }}
      />
    </SwipeableDrawer>
  )
}
