'use server';

import { Box } from "@mui/material";
import Image from 'next/image';
import bg from '../../../../../public/images/faq-bg.png';

export default async function TrainingCenterProgramBg() {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 2,
        top: { xs: '-30px', sm: '-30px', md: '-50px', lg: '0px', xl: '-50px' },
        left: { xs: '0px', sm: '100px', md: '500px', lg: '500px', xl: '700px' },
        display: 'flex',
        width: { xs: '848px', sm: '848px', md: '848px', lg: '848px', xl: '848px' },
        height: { xs: '848px', sm: '848px', md: '848px', lg: '848px', xl: '848px' },
      }}
    >
      <Image src={bg} alt="" fill/>
    </Box>
  )
}
