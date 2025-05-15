'use server'

import { Box } from "@mui/material";
import Image from 'next/image';
import dashboard from '../../../../public/images/where-is-it-used.png'
import WhereIsItUsedTitle from "./components/where-is-it-used-title";
import WhereIsItUsedTexts from "./components/where-is-it-used-texts";

export default async function WhereIsItUsed() {
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        mr: { xs: '0px', sm: 'auto', md: '0px', lg: '20px', xl: 'auto' },
        ml: { xs: '0px', sm: 'auto', md: '20px', lg: '20px', xl: 'auto' },
        mt: { xs: '64px', sm: '64px', md: '80px', lg: '80px', xl: '120px' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '343px', sm: '343px', md: '704px', lg: 'inherit', xl: 'inherit' },
          minWidth: { xs: 'inherit', sm: 'inherit', md: '704px', lg: '650px', xl: '704px' },
          mt: { xs: '0px', sm: '0px', md: '0px', lg: '92px', xl: '92px' },
          mr: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '32px' },
        }}
      >
        <WhereIsItUsedTitle />
        <WhereIsItUsedTexts />
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          width: { xs: '343px', sm: '343px', md: '704px', lg: '704px', xl: '704px' },
          height: { xs: '229px', sm: '229px', md: '470px', lg: '470px', xl: '470px' },
          maxWidth: { xs: '343px', sm: '343px', md: '704px', lg: 'inherit', xl: 'inherit' },
          mr: { xs: '0px', sm: '0px', md: '0px', lg: '20px', xl: '20px' },
          left: { xs: '0px', sm: '0px', md: '-40px', lg: '0px', xl: '0px' },
        }}
      >
        <Image src={dashboard} alt="dashboard" fill />
      </Box>
    </Box>
  )
}
