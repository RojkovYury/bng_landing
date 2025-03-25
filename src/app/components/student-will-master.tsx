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
      <Box sx={{ width: '1440px', mx: 'auto', mt: '64px', mb: '64px', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ mr: '80px' }}>
          <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', color: '#FFFFFF' }}>
            Учащийся освоит:
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '40px', maxWidth: '896px' }}>
            {tagText.map((tag, index) => (
              <Box key={index}
                sx={{
                  mr: '20px',
                  mb: '20px',
                  py: '12px',
                  px: '24px',
                  borderRadius: '8px',
                  bgcolor: '#FFFFFF33',
                  whiteSpace: 'nowrap',
                }}
              >
                <Typography sx={{ cursor: 'default', fontSize: '18px', fontWeight: 500, lineHeight: '24px', color: '#FFFFFF' }}>
                  {tag}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <SignUpContainer
            text="Записаться на курс"
          />
        </Box>
      </Box>
    </Box>
  )
}
