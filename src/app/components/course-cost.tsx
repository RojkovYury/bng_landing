'use server'

import { Box, Typography } from "@mui/material";

export default async function CourseCost() {
  return (
    <Box sx={{ maxWidth: '1440px', width: '100%', mx: 'auto', display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ display: 'flex', mb: '80px' }}>
        <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', color: '#FFA700' }}>
          Стоимость&nbsp;
        </Typography>
        <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}>
          курса
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', bgcolor: '#F2F5F9', borderRadius: '20px', overflow: 'hidden' }}>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', bgcolor: '#1144AA', borderRadius: '20px', py: '58px', px: '64px', width: '285px' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '32px', color: '#FFF', mb: '12px' }}>
            24 000 ₽
          </Typography>
          <Typography sx={{ fontSize: '40px', fontWeight: 700, lineHeight: '48px', color: '#FFF' }}>
            20 000 ₽
          </Typography>
        </Box>

        <Box sx={{ py: '32px', pr: '40px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', mb: '20px' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '24px', mr: '16px' }}>
              Скидка действует
            </Typography>
            <Box sx={{ display: 'flex', maxWidth: '181px', borderRadius: '8px', py: '8px', px: '20px', bgcolor: '#FFA700'  }}>
              <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '24px', color: '#F2F5F9', mr: '12px' }}>
                4 дня
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '24px', color: '#F2F5F9' }}>
                20:09:56
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '181px', borderRadius: '8px', py: '12px', px: '40px', bgcolor: '#FFF', mr: '20px'  }}>
              <Typography sx={{ fontSize: '20px', fontWeight: 600, lineHeight: '24px', mb: '12px' }}>
                ДАТА СТАРТА:
              </Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: '#1144AA' }}>
                21 АПРЕЛЯ
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '220px', borderRadius: '8px', py: '12px', px: '40px', bgcolor: '#FFF', mr: '20px'  }}>
              <Typography sx={{ fontSize: '20px', fontWeight: 600, lineHeight: '24px', mb: '12px' }}>
                ДОСТУПНО:
              </Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: '#1144AA' }}>
                5 МЕСТ
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '305px', borderRadius: '8px', py: '12px', px: '40px', bgcolor: '#FFF'  }}>
              <Typography sx={{ fontSize: '20px', fontWeight: 600, lineHeight: '24px', mb: '12px' }}>
                ДЛИТЕЛЬНОСТЬ:
              </Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: '#1144AA' }}>
                3 МЕСЯЦА
              </Typography>
            </Box>
          </Box>

        </Box>

      </Box>

    </Box>
  )
}
