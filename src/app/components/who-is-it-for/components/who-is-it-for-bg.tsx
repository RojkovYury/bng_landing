import { Box } from "@mui/material";
import Image from 'next/image';
import bgR from '../../../../../public/images/who-is-it-for-bg-right.png';
import bgL from '../../../../../public/images/who-is-it-for-bg-left.png';

export default function WhoIsItForBg() {
  return (   
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', zIndex: 1, width: '100%', height: { xs: '280px', sm: '280px', md: '360px', lg: '360px', xl: '360px' }, bgcolor: '#1144AA', bottom: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            bottom: '0px',
            right: '0px',
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex' },
            width: '470px',
            height: '360px',
          }}
        >
          <Image src={bgR} alt="" fill/>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            bottom: '0px',
            left: '0px',
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex' },
            width: '784px',
            height: '360px',
          }}
        >
          <Image src={bgL} alt="" fill/>
        </Box>
      </Box>
    </Box>
  )
}
