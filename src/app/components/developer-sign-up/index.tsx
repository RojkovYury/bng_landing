'use server'

import { Box } from "@mui/material";
import Image from 'next/image';
import developer from '../../../../public/images/developer-sign-up.svg'
import DeveloperSignUpButton from "./components/developer-sign-up-button";
import DeveloperSignUpTitle from "./components/developer-sign-up-title";
import DeveloperSignUpSubTitle from "./components/developer-sign-up-sub-title";
import DeveloperSignUpInfo from "./components/developer-sign-up-info";

export default async function DeveloperSignUp() {
  return (
    <Box
      sx={{
        maxWidth: '1440px',
        width: '100%',
        mx: 'auto',
        height: { xs: '709px', sm: '709px', md: '813px', lg: '813px', xl: '813px' },
        bgcolor: "#fff",
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
        alignItems: { xs: 'center', sm: 'center', md: 'inherit', lg: 'inherit', xl: 'inherit' },
      }}
    >
      <Box
        sx={{
          minWidth: { xs: '0', sm: '0', md: '406px', lg: '482px', xl: '482px' },
          mr: { xs: '20px', sm: '0px', md: '0px', lg: '0px', xl: '58px' },
          ml: { xs: '20px', sm: '0px', md: '20px', lg: '20px', xl: '0px' },
          mt: { xs: '32px', sm: '32px', md: '130px', lg: '182px', xl: '182px' },
        }}
      > 
        <DeveloperSignUpTitle/>
        <DeveloperSignUpSubTitle />
        <DeveloperSignUpButton />
        <DeveloperSignUpInfo />
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: '100%',
          width: { xs: '450px', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
          maxWidth: '1140px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: { xs: 'absolute', sm: 'absolute', md: 'absolute', lg: 'absolute', xl: 'absolute' },
            width: { xs: '450px', sm: '100%', md: '1140px', lg: '1140px', xl: '1140px' },
            height: { xs: '303px', sm: '100%', md: '768px', lg: '768px', xl: '768px' },
            bottom: 0,
            left: { xs: '0px', sm: '0px', md: '300px', lg: '-130px', xl: '0px' },
          }}
        >
          <Image src={developer} alt="developer" fill priority={true} />
        </Box>
      </Box>
    </Box>
  )
}
