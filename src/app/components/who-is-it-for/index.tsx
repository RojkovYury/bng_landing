'use server'

import WhoIsItForCard from "@/app/components/who-is-it-for/components/who-is-it-for-card";
import { Box, Typography } from "@mui/material";
import outIt from '../../../../public/images/who-is-it-for-out.png'
import student from '../../../../public/images/who-is-it-for-stud.png'
import inIt from '../../../../public/images/who-is-it-for-in.png'

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '40px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

export default async function WhoIsItFor() {
  return (
    <>
      <Box
        sx={{
          maxWidth: '1440px',
          mx: 'auto',
          position: 'relative',
          display: 'flex',
          zIndex: 2,
          flexDirection: 'column',
          mt: '180px',
        }}
      >
        <Box sx={{ display: 'flex', mb: '80px' }}>
          <Typography sx={{...titleTypography, color: '#FFA700' }}>
            Для кого&nbsp;
          </Typography>
          <Typography sx={{...titleTypography }}>
            предназначен мастер-класс
          </Typography>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', zIndex: 2, mb: '80px' }}>
          <WhoIsItForCard
            title='Специалистам вне IT'
            text='Недовольны своим нынешним доходом? Программирование — это удобный путь в прибыльную и быстро развивающуюся IT-индустрию'
            src={outIt}
            mr
          />
          <WhoIsItForCard
            title='Студентам'
            text='Освойте престижную профессию еще в процессе обучения. Начните строить карьеру раньше своих сверстников'
            src={student}
            mr
          />
          <WhoIsItForCard
            title='IT специалистам'
            text='Уже работаете программистом? Повысьте свои навыки, изучите востребованный язык С#, чтобы претендовать на более высокую зарплату'
            src={inIt}
          />
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', zIndex: 1, width: '100%', height: '360px', bgcolor: '#1144AA', bottom: 0 }}/>
      </Box>
    </>
  )
}
