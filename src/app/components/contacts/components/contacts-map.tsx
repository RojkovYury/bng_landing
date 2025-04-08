'use server';

import SignUpContainer from "@/components/sign-up-container";
import { Box } from "@mui/material";

export default async function ContactsMap() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          backgroundColor: 'lightgrey',
          height: '518px',
          mb: { xs: '32px', sm: '32px', md: '0px', lg: '0px', xl: '0px' },
          borderRadius: '8px',
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
            position: 'absolute',
            left: '40px',
            top: '40px',
          }}
        >
          <SignUpContainer text="Обратный звонок"/>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
          mx: 'auto',
        }}
      >
        <SignUpContainer text="Обратный звонок" sx={{ boxShadow: '0px 12px 20px 0px #13264D1F' }}/>
      </Box>
    </>
  )
}
