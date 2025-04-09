'use server'

import OurMentorsCard from "@/app/components/our-mentors/components/our-mentors-card";
import { Box, Typography } from "@mui/material";

import mentor1 from '../../../../public/images/our-mentors-1.png'
import mentor2 from '../../../../public/images/our-mentors-2.png'
import mentor3 from '../../../../public/images/our-mentors-3.png'
import OurMentorMobileCards from "./components/our-mentors-mobile-cards";

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '40px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

export default async function OurMentors() {
  return (
    <Box
      id="mentors"
      sx={{
        maxWidth: '1440px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        mt: { xs: '80px', sm: '80px', md: '80px', lg: '180px', xl: '180px' },
        mr: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: 'auto' },
        ml: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: 'auto' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '32px',
          flexDirection: 'row',
          mr: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
          ml: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
        }}
      >
        <Typography sx={{ ...titleTypography, color: '#FFA700' }}>
          Наши&nbsp;
        </Typography>
        <Typography sx={{ ...titleTypography }}>
          наставники
        </Typography>
      </Box>

      <Typography
        sx={{
          mb: '80px',
          fontSize: { xs: '32px', sm: '32px', md: '20px', lg: '24px', xl: '24px' },
          lineHeight: { xs: '40px', sm: '40px', md: '28px', lg: '32px', xl: '32px' },
          fontWeight: 400,
          display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
        }}
      >
        В данном мастер-классе вашими наставниками будут опытные программисты
      </Typography>

      {/* Desctop cards */}
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, mb: '80px' }}>
        <OurMentorsCard
          title='Дмитрий'
          subTitle='FullStack Dev, TeamLead'
          text='Ведущий разработчик, TeamLead. Преподаватель программирования с 8-летним опытом.'
          src={mentor1}
          mr
        />
        <OurMentorsCard
          title='Сергей'
          subTitle='TeamLead, Architect, FullStack Dev'
          text='Основатель Академии, директор компании по разработке ПО, архитектор программных систем с 16-летним опытом.'
          src={mentor2}
          mr
        />
        <OurMentorsCard
          title='Марина'
          subTitle='C# Senior Dev, TeamLead'
          text='Ведущий российский разработчик и наставник. Ведущий ментор и специалист по обучению новых сотрудников.'
          src={mentor3}
        />
      </Box>

      {/* Mobile cards */}
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
        <OurMentorMobileCards />
      </Box>

    </Box>
  )
}
