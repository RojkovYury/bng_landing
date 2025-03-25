'use server'

import ButtonDownload from "@/components/button-download";
import { Box, Typography } from "@mui/material";

export default async function TrainingCenterProgram() {
  return (
    <Box sx={{ width: '1440px', mx: 'auto' }}>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mt: '180px', mb: '80px' }}>
        <Box>
          <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', color: '#FFA700' }}>
            Программа
          </Typography>
          <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}>
            нашего учебного центра
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', mb: '20px', p: '12px', border: '2px solid #FFA700', borderRadius: '8px' }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 600, lineHeight: '24px', mr: '12px' }}>
              КУРС РАЗБИТ НА
            </Typography>
            <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: '#1144AA' }}>
              3 МОДУЛЯ
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', p: '12px', border: '2px solid #FFA700', borderRadius: '8px' }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 600, lineHeight: '24px', mr: '12px' }}>
              ДЛИТЕЛЬНОСТЬ:
            </Typography>
            <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: '#1144AA' }}>
              3 МЕСЯЦА
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ minHeight: '500px', borderRadius: '40px', bgcolor: '#F2F5F9', mb: '40px' }}>
        !== client render component ==!
      </Box>

      <Box sx={{ display: 'flex', mb: '180px' }}>
        <ButtonDownload
          text="Скачать подробный план"
          sx={{ mr: '80px' }}
        />
        <Box sx={{ borderRadius: '20px', bgcolor: '#ECEFF4', py: '24px', px: '40px'  }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
            Результатом освоения курса для каждого слушателя станет достаточно подробное знакомство с языком C# и базовое знакомство с разработкой web-приложений на уровне Trainee или Junior-разработчика.
          </Typography>
        </Box>
      </Box>

    </Box>
  )
}
