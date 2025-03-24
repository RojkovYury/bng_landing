'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import dashboard from '../../../public/images/where-is-it-used.svg'

export default async function WhereIsItUsed() {
  return (
    <Box sx={{ maxWidth: '1440px', mx: 'auto', display: 'flex', height: '590px', bgcolor: "#fff" }}>

      <Box sx={{ minWidth: '704px' }}>
        <Box sx={{ display: 'flex', mb: '80px', mt: '120px' }}>
          <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}>Где применяется&nbsp;</Typography>
          <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', color: '#FFA700' }}>язык С#</Typography>
        </Box>

        <Box sx={{ mb: '20px' }}>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px' }}>На C# разрабатывают высоконагруженные веб-сайты,</Typography>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px' }}>мобильные и настольные приложения, а также игры</Typography>
        </Box>

        <Box sx={{ mb: '64px' }}>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px', fontWeight: 500 }}>Освоив этот язык, вы сможете создавать все это</Typography>
          <Typography sx={{ fontSize: '24px', lineHeight: '32px', fontWeight: 500 }}>и претендовать на высокооплачиваемую работу</Typography>
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', height: '100%', alignItems: 'start', mt: '120px' }}>
        <Image
          layout="responsive"
          src={dashboard}
          alt="dashboard"
          width={704}
          height={470}
        />
      </Box>
    </Box>
  )
}
