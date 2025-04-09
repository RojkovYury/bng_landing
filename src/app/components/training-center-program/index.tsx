'use server'

import { Box, Typography } from "@mui/material";
import TrainingCenterProgramAccordion from "./components/training-center-program-accordion";
import TrainingCenterProgramButtonDownload from "./components/training-center-program-button-download";

const titleText = {
  fontSize: { xs: '32px', sm: '32px', md: '48px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '56px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

const boxText = {
  fontSize: { xs: '14px', sm: '14px', md: '20px', lg: '20px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
  fontWeight: 600,
  mr: { xs: '0px', sm: '12px', md: '12px', lg: '12px', xl: '12px' },
  textWrap: 'nowrap',
}

const boxTextSecondary = {
  fontSize: { xs: '14px', sm: '14px', md: '20px', lg: '20px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
  fontWeight: 700,
  color: '#1144AA',
  textWrap: 'nowrap',
}

export default async function TrainingCenterProgram() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        maxWidth: '1440px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
          mt: { xs: '80px', sm: '80px', md: '180px', lg: '180px', xl: '180px' },
          mb: { xs: '40px', sm: '40px', md: '80px', lg: '80px', xl: '80px' },
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <Box sx={{ mb: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px' }, mr: '20px' }}>
          <Typography sx={{ ...titleText, color: '#FFA700' }}>Программа</Typography>
          <Typography sx={{ ...titleText }}>нашего учебного центра</Typography>
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'space-between', sm: 'space-between', md: 'center', lg: 'center', xl: 'center' },
            flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column', xl: 'column' },
          }}
        >
          <Box
            sx={{
              mt: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
              display: 'flex',
              p: '12px',
              border: '2px solid #FFA700',
              borderRadius: '8px',
              mb: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: '20px' },
              flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
            }}
          >
            <Typography sx={{ ...boxText }}>КУРС РАЗБИТ НА</Typography>
            <Typography sx={{ ...boxTextSecondary }}>3 МОДУЛЯ</Typography>
          </Box>

          <Box
            sx={{
              mt: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
              display: 'flex',
              p: '12px',
              border: '2px solid #FFA700',
              borderRadius: '8px',
              flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
            }}
          >
            <Typography sx={{ ...boxText }}>ДЛИТЕЛЬНОСТЬ:</Typography>
            <Typography sx={{ ...boxTextSecondary }}>3 МЕСЯЦА</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: '40px',
          bgcolor: '#F2F5F9',
          mb: '40px',
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <TrainingCenterProgramAccordion
          index="1"
          title="Посвящен самым основам программирования – условия, циклы, функции, типы данных."
          text="Таким образом, начальных знаний программирования слушателю курса не требуется. Рассматриваемые понятия в основном дублируют их аналоги в других языках программирования, но рассматриваются и некоторые уникальные особенности языка C#."
          dafaultExpanded
        />
        <TrainingCenterProgramAccordion
          index="2"
          title="Углубляется в тему программирования."
          text="В нем рассматриваются, с одной стороны, инструменты и механизмы, специфичные для языка C#, и, с другой стороны, универсальные понятия и концепции программирования, применимые на любом объектно-ориентированном языке."
          sx={{ mt: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' } }}
        />
        <TrainingCenterProgramAccordion
          index="3"
          title="Посвящен созданию web-приложения"
          text="C использованием фреймворка Asp.NET Core, а также языка динамической разметки страниц Razor. Также рассматривается введение в работу с базами данных на примере SQLite."
          sx={{ mt: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' }, mb: '40px' }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          mb: { xs: '80px', sm: '80px', md: '180px', lg: '180px', xl: '180px' },
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <TrainingCenterProgramButtonDownload/>
        <Box
          sx={{
            borderRadius: '20px',
            bgcolor: '#ECEFF4',
            py: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
            px: { xs: '16px', sm: '16px', md: '40px', lg: '40px', xl: '40px' },
        }}
        >
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '14px', md: '18px', lg: '18px', xl: '18px' },
              lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
              fontWeight: 500,
            }}
          >
            Результатом освоения курса для каждого слушателя станет достаточно подробное знакомство с языком C# и базовое знакомство с разработкой web-приложений на уровне Trainee или Junior-разработчика.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
