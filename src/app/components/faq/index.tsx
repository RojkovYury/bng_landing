'use server'

import FaqAccordion from "@/components/faq-accordion";
import { Box } from "@mui/material";
import CourseCostTitle from "./components/faq-title";

export default async function Faq() {
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
      <CourseCostTitle />
      <Box
        sx={{
          display: 'flex',
          mb: '180px',
          width: '100%',
          bgcolor: '#F2F5F9',
          borderRadius: '40px',
          py: '40px',
          // mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
        }}
      >
        <Box>
          <FaqAccordion
            title="Что такое C# и почему стоит его изучать?"
            text="Вы научитесь программировать на C#, создавать сайты, мобильные и десктопные приложения. Также освоите основы работы с базами данных SQL, веб-разработку на ASP.NET Core, и получите базовые знания в DevOps."
            sx={{ mx: '40px' }}
          />
          <FaqAccordion
            title="Какие навыки я получу после прохождения мастер-класса?"
            text="Вы научитесь программировать на C#, создавать сайты, мобильные и десктопные приложения. Также освоите основы работы с базами данных SQL, веб-разработку на ASP.NET Core, и получите базовые знания в DevOps."
            sx={{ mx: '40px' }}
          />
          <FaqAccordion
            title="Какие преимущества у мастер-класса от BnG"
            text="Вы научитесь программировать на C#, создавать сайты, мобильные и десктопные приложения. Также освоите основы работы с базами данных SQL, веб-разработку на ASP.NET Core, и получите базовые знания в DevOps."
            sx={{ mx: '40px', mb: '0px' }}
          />
        </Box>

        <Box>
          <FaqAccordion
            title="Кто может пройти мастер-класс на C#-разработчика?"
            text="Вы научитесь программировать на C#, создавать сайты, мобильные и десктопные приложения. Также освоите основы работы с базами данных SQL, веб-разработку на ASP.NET Core, и получите базовые знания в DevOps."
            sx={{ mr: '40px' }}
          />
          <FaqAccordion
            title="Как проходит обучение?"
            text="Вы научитесь программировать на C#, создавать сайты, мобильные и десктопные приложения. Также освоите основы работы с базами данных SQL, веб-разработку на ASP.NET Core, и получите базовые знания в DevOps."
            sx={{ mr: '40px' }}
          />
          <FaqAccordion
            title="Что включено в программу курса?"
            text="Вы научитесь программировать на C#, создавать сайты, мобильные и десктопные приложения. Также освоите основы работы с базами данных SQL, веб-разработку на ASP.NET Core, и получите базовые знания в DevOps."
            sx={{ mr: '40px', mb: '0px' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
