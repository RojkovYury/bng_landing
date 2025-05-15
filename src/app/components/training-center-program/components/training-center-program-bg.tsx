'use client';

import { Box } from "@mui/material";
import Image from 'next/image';
import bg from '../../../../../public/images/training-center-program-bg.png';

export default function TrainingCenterProgramBg() {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 2,
        top: { xs: '-30px', sm: '-30px', md: '-50px', lg: '-50px', xl: '-50px' },
        left: '0px',
        display: 'flex',
        width: { xs: '500px', sm: '500px', md: '836px', lg: '836px', xl: '836px' },
        height: { xs: '500px', sm: '500px', md: '836px', lg: '836px', xl: '836px' },
      }}
    >
      <Image src={bg} alt="" fill/>
    </Box>
  )
}
