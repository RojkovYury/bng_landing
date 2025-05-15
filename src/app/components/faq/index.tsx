'use server'

import FaqAccordion from "@/app/components/faq/components/faq-accordion";
import { Box } from "@mui/material";
import CourseCostTitle from "./components/faq-title";
import TrainingCenterProgramBg from "./components/faq-bg";

export default async function Faq() {
  return (
    <Box
      id="faq"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        maxWidth: '1440px',
        width: '100%',
      }}
    >
      <CourseCostTitle />
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
          mb: { xs: '80px', sm: '80px', md: '180px', lg: '180px', xl: '180px' },
          width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 32px)', md: 'calc(100% - 40px)', lg: 'calc(100% - 40px)', xl: 'calc(100% - 40px)' },
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
          bgcolor: '#F2F5F9',
          borderRadius: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
          py: { xs: '16px', sm: '16px', md: '40px', lg: '40px', xl: '40px' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }, zIndex: 3 }}>
          <FaqAccordion
            dafaultExpanded
            title="Что такое C# и почему стоит его изучать?"
            text="Язык C# является одним из самых широко используемых языков разработки с огромным сообществом и набором библиотек и инструментов под самые разные задачи."
            sx={{
              mr: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              mb: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
            }}
          />
          <FaqAccordion
            title="Какие навыки я получу после прохождения мастер-класса?"
            text="Вы научитесь разрабатывать приложения с использованием C#, узнаете основы работы с популярными фреймворками разработки, работы с БД, узнаете основные принципы и практики разработки."
            sx={{
              mr: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              mb: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
            }}
          />
          <FaqAccordion
            title="Какие преимущества у мастер-класса от BnG"
            text="В вашем распоряжении будет не только «стандартный» набор книжных терминов и знаний, как в любом курсе по программированию, но и реальный опыт действующих разработчиков, лидов и архитекторов, и всё это очно и за доступную цену."
            sx={{
              mr: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              mb: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
            }}
          />
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }, zIndex: 3 }}>
          <FaqAccordion
            title="Кто может пройти мастер-класс на C#-разработчика?"
            text="Любой школьник, студент или взрослый. Главное - старше 16 лет и желание научиться новому."
            sx={{
              mr: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              mb: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
            }}
          />
          <FaqAccordion
            title="Как проходит обучение?"
            text="Всё происходит очно в малых группах – никакого онлайна, в котором у вас от преподавателя только запись голоса в наушниках. Кроме того, за пределами аудитории наставники также обеспечивают сопровождение и готовы прийти на помощь."
            sx={{
              mr: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              mb: { xs: '20px', sm: '20px', md: '40px', lg: '40px', xl: '40px' },
            }}
          />
          <FaqAccordion
            title="Что включено в программу курса?"
            text="Разработка приложений, работа с БД, работа с ботами для Телеграмма, правила и паттерны проектирования и разработки и многое другое."
            sx={{
              mr: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '20px' },
              mb: '0px',
            }}
          />
        </Box>
        <TrainingCenterProgramBg />
      </Box>
    </Box>
  )
}
