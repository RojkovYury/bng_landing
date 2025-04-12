'use server';

import { Box } from "@mui/material";
import Image from 'next/image';
import background from '../../../../../public/images/student-will-master-bg.png'
import backgroundMobile from '../../../../../public/images/student-will-master-bg-mobile.png'

export default async function StudentWillMasterBg() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: { xs: '0px', sm: '235px', md: '0px', lg: '0px', xl: '0px' },
          right: '0px',
          display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' },
          width: '764px',
          height: '518px',
        }}
      >
        <Image src={background} alt="" fill/>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          display: 'flex',
          bottom: '0px',
          width: '100%',
          height: '420px',
          justifyContent: 'center',
          alignItems: 'end',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
            width: '100%',
            height: '0',
            paddingBottom: '69.14%',
            aspectRatio: '350 / 245',
          }}
        >
          <Image src={backgroundMobile} alt="" fill/>
        </Box>
      </Box>
    </>
  )
}
