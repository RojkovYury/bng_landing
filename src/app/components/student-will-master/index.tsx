'use server'

import SignUpContainer from "@/components/sign-up-container";
import { Box, Typography } from "@mui/material";
import StudentWillMasterTag from "./components/student-will-master-tag";

const tagText1 = [
  'Язык C#',
  'Основы ООП, применимые во множестве языков',
  'Паттерны проектирования приложений',
  'Создание веб-приложений',
]
const tagText2 = [
  'Создание ботов для мессенджеров',
  'Основы HTML+JS+CSS',
  'Основы работы с базами данных',
]
const tagText3 = [
  'Основы работы с системами контроля версий',
  'Соблюдение стиля и оптимизация кода',
  'Рефакторинг и ревью кода ',
]

export default async function StudentWillMaster() {
  return (
    <Box sx={{ bgcolor: "#1144AA" }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
          mx: 'auto',
          maxWidth: '1440px',
          mt: '64px',
          mb: '64px',
          width: { xs: '100%', sm: '100%', md: 'unset', lg: 'unset', xl: 'unset' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mr: { xs: '0px', sm: '0px', md: '10px', lg: '20px', xl: '80px' },
            ml: { xs: '0px', sm: '0px', md: '20px', lg: '20px', xl: '0px' },
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '40px',
              color: '#FFFFFF',
              // mr: '20px',
              mr: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl: '0px' },
              ml: { xs: '16px', sm: '16px', md: '0px', lg: '0px', xl: '0px' },
            }}
          >
            Учащийся освоит:
          </Typography>

          {/* desktop */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
              flexWrap: 'wrap',
              mt: '40px',
            }}
          >
            {[...tagText1, ...tagText2, ...tagText3].map((tag, index) => (
              <StudentWillMasterTag key={index} tag={tag}/>
            ))}
          </Box>
          
          {/* mobile */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
              position: 'relative',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              flexWrap: 'wrap',
              overflow: 'auto',
              scrollbarColor: "#C9D3E8 #1144AA",
              mt: '20px',
              mb: '40px',
            }}
          >
            <Box sx={{ display: 'flex', ml: '16px' }}>
              {tagText1.map((tag, index) => (<StudentWillMasterTag key={index} tag={tag}/>))}
            </Box>

            <Box sx={{ display: 'flex', ml: '16px' }}>
              {tagText2.map((tag, index) => (<StudentWillMasterTag key={index} tag={tag}/>))}
            </Box>

            <Box sx={{ display: 'flex', ml: '16px', mb: '6px' }}>
              {tagText3.map((tag, index) => (<StudentWillMasterTag key={index} tag={tag}/>))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', mx: { xs: 'auto', sm: 'auto', md: '20px', lg: '20px', xl: '0px' } }}>
          <SignUpContainer
            text="Записаться на курс"
            sx={{  width: { xs: '100%', sm: '100%', md: '370px', lg: '370px', xl: '370px' } }}
          />
        </Box>
      </Box>
    </Box>
  )
}
