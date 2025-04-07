import SignUpContainer from "@/components/sign-up-container";
import { Box, Typography } from "@mui/material";

const tagText = [
  'Язык C#',
  'Основы ООП, применимые во множестве языков',
  'Паттерны проектирования приложений',
  'Создание веб-приложений',
  'Создание ботов для мессенджеров',
  'Основы HTML+JS+CSS',
  'Основы работы с базами данных',
  'Основы работы с системами контроля версий',
  'Соблюдение стиля и оптимизация кода',
  'Рефакторинг и ревью кода ',
];

export default async function StudentWillMaster() {
  return (
    <Box sx={{ bgcolor: "#1144AA" }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
          mx: 'auto',
          maxWidth: '1440px',
          // width: '100%',
          mt: '64px',
          mb: '64px',
          justifyContent: 'space-between',
          alignItems: { xs: 'center', sm: 'center', md: 'unset', lg: 'unset', xl: 'unset' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mr: { xs: '20px', sm: '20px', md: '10px', lg: '20px', xl: '80px' },
            ml: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
          }}
        >
          <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', color: '#FFFFFF' }}>
            Учащийся освоит:
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '40px' }}>
            {tagText.map((tag, index) => (
              <Box key={index}
                sx={{
                  mr: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '20px' },
                  mb: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '20px' },
                  py: { xs: '4px', sm: '4px', md: '4px', lg: '10px', xl: '12px' },
                  px: { xs: '12px', sm: '12px', md: '12px', lg: '20px', xl: '24px' },
                  borderRadius: '8px',
                  bgcolor: '#FFFFFF33',
                  whiteSpace: 'nowrap',
                }}
              >
                <Typography
                  sx={{
                    cursor: 'default',
                    fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '14px', xl: '18px' },
                    lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '22px', xl: '24px' },
                    fontWeight: 500,
                    color: '#FFFFFF',
                  }}
                >
                  {tag}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            mr: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
          }}
        >
          <SignUpContainer
            text="Записаться на курс"
          />
        </Box>
      </Box>
    </Box>
  )
}
