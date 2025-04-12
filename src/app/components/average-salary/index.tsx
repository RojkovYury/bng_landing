'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import background from '../../../../public/images/average-salary-bg.svg'
import AverageSalaryRow from "@/app/components/average-salary/components/average-salary-row";
import AverageSalaryButton from "./components/average-salary-button";
import AverageSalaryTitle from "./components/average-salary-title";

export default async function AverageSalary() {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        zIndex: 3,
        maxWidth: '1440px',
        width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 32px)', md: 'calc(100% - 40px)', lg: 'calc(100% - 40px)', xl: 'calc(100% - 40px)' },
        mr: { xs: '16px', sm: '16px', md: '20px', lg: 'auto', xl: 'auto' },
        ml: { xs: '16px', sm: '16px', md: '20px', lg: 'auto', xl: 'auto' },
        borderRadius: '40px',
        bgcolor: '#F2F5F9',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: { xs: 'unset', sm: '-140px', md: '-140px', lg: '-140px', xl: '-140px' },
          right: { xs: 'unset', sm: '-60px', md: '0px', lg: '0px', xl: '0px' },
          display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' },
          width: '849px',
          height: '842px',
          alignItems: 'start',
        }}
      >
        <Image src={background} alt="" fill/>
      </Box>

      <Box
        sx={{
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          px: { xs: '16px', sm: '16px', md: '40px', lg: '80px', xl: '80px' },
          width: '100%',
          mb: { xs: '32px', sm: '32px', md: '32px', lg: '64px', xl: '64px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
            justifyContent: 'space-between',
            mt: { xs: '32px', sm: '32px', md: '40px', lg: '64px', xl: '64px' },
          }}
        >
          <AverageSalaryTitle />
          <Box sx={{ display: 'flex', alignItems: 'end' }}>
            <AverageSalaryButton />
          </Box>
        </Box>

        <Box sx={{ mt: { xs: '40px', sm: '40px', md: '40px', lg: '64px', xl: '64px' } }} >
          <AverageSalaryRow
            bgColor='#C9D3E8'
            textPrice='100 000 ₽'
            textCompetence='JUNIOR'
            textExp='После курса'
            rowWidth={{ xs: '65%', sm: '50%', md: '35%', lg: '50%', xl: '45%' }}
          />
          <AverageSalaryRow
            bgColor='#798EBC'
            textPrice='220 000 ₽'
            textCompetence='MIDLE'
            textExp='Опыт 1-3 года'
            rowWidth={{ xs: '82%', sm: '70%', md: '55%', lg: '65%', xl: '60%' }}
          />
          <AverageSalaryRow
            bgColor='#1144AA'
            textPrice='330 000 ₽'
            textCompetence='SENIOR'
            textExp='С опытом работы от 3 лет'
            rowWidth={{ xs: '95%', sm: '95%', md: '85%', lg: '90%', xl: '90%' }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: '12px', sm: '12px', md: '12px', lg: '16px', xl: '16px' },
            lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '20px', xl: '20px' },
            fontWeight: 400,
            color: '#5C6571',
          }}
        >
          *по данным «Хабр Карьеры» в 2024 году
        </Typography>
      </Box>
    </Box>
  )
}
