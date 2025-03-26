'use server'

import OurMentorsCard from "@/components/our-mentors-card";
import { Box, Typography } from "@mui/material";

import mentor1 from '../../../public/images/our-mentors-1.png'
import mentor2 from '../../../public/images/our-mentors-2.png'
import mentor3 from '../../../public/images/our-mentors-3.png'

export default async function OurMentors() {
  return (
    <Box sx={{ maxWidth: '1440px', mx: 'auto', position: 'relative', display: 'flex', flexDirection: 'column', my: '180px' }}>
      <Box sx={{ display: 'flex', mb: '32px' }}>
        <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', color: '#FFA700' }}>
          Наши&nbsp;
        </Typography>
        <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}>
          наставники
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px', mb: '80px' }}>
        В данном мастер-классе вашими наставниками будут опытные программисты
      </Typography>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <OurMentorsCard
          title='Имя Фамилия'
          subTitle='C# Senior developer'
          text='PIX RPA - ведущий российский разработчик программного обеспечения для роботизации бизнес-процессов.'
          src={mentor1}
          mr
        />
        <OurMentorsCard
          title='Имя Фамилия'
          subTitle='C# Senior developer'
          text='PIX RPA - ведущий российский разработчик программного обеспечения для роботизации бизнес-процессов.'
          src={mentor2}
          mr
        />
        <OurMentorsCard
          title='Имя Фамилия'
          subTitle='C# Senior developer'
          text='PIX RPA - ведущий российский разработчик программного обеспечения для роботизации бизнес-процессов.'
          src={mentor3}
        />
      </Box>

    </Box>
  )
}
