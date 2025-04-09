'use client';

import { Box } from "@mui/material";
import Image from 'next/image';
import bg from '../../../../../public/images/training-center-program-bg.png';
import bgm from '../../../../../public/images/training-center-program-bg-mobile.png';

export default function TrainingCenterProgramBg() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: '0px',
          left: '0px',
          display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
          width: '836px',
          height: '572px',
        }}
      >
        <Image src={bg} alt="" fill/>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: '0px',
          left: '0px',
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
          width: '343px',
          height: '358px',
        }}
      >
        <Image src={bgm} alt="" fill/>
      </Box>
    </>
  )
}
