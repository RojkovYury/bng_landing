'use server'

import { Box, Typography } from "@mui/material";
import TrainingCenterProgramAccordion from "./components/training-center-program-accordion";
import TrainingCenterProgramButtonDownload from "./components/training-center-program-button-download";
import TrainingCenterProgramHeader from "./components/training-center-program-header";
import TrainingCenterProgramBg from "./components/training-center-program-bg";

export default async function TrainingCenterProgram() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        maxWidth: '1440px',
        width: '100%',
        zIndex: 3,
      }}
    >
      <TrainingCenterProgramHeader />
      <Box
        sx={{
          position: 'relative',
          borderRadius: '40px',
          bgcolor: '#F2F5F9',
          mb: '40px',
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
          zIndex: 3,
          overflow: 'hidden',
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

        <TrainingCenterProgramBg />
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
