'use server'

import WhoIsItForCard from "@/app/components/who-is-it-for/components/who-is-it-for-card";
import { Box } from "@mui/material";
import outIt from '../../../../public/images/who-is-it-for-out.png';
import student from '../../../../public/images/who-is-it-for-stud.png';
import inIt from '../../../../public/images/who-is-it-for-in.png';
import WhoIsItForTitle from "./components/who-is-it-for-title";
import WhoIsItForMobileCards from "./components/who-is-it-for-mobile-cards";
import WhoIsItForBg from "./components/who-is-it-for-bg";

export default async function WhoIsItFor() {
  return (
    <>
      <Box
        id="forWhom"
        sx={{
          maxWidth: '1440px',
          position: 'relative',
          display: 'flex',
          zIndex: 3,
          flexDirection: 'column',
          mt: { xs: '80px', sm: '80px', md: '80px', lg: '180px', xl: '180px' },
          mr: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: 'auto' },
          ml: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: 'auto' },
        }}
      >
        <WhoIsItForTitle />

        {/* Desctop cards */}
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, zIndex: 2, mb: '80px' }}>
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

        {/* Mobile cards */}
        <Box sx={{ zIndex: 3, display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
          <WhoIsItForMobileCards />
        </Box>

      </Box>
      <WhoIsItForBg />
    </>
  )
}
