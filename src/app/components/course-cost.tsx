'use server'

import { Box, Typography } from "@mui/material";

const titleTypography = {
  fontSize: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
  lineHeight: { xs: '40px', sm: '40px', md: '40px', lg: '56px', xl: '56px' },
  fontWeight: 700,
}

const boxTypography = {
  fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '20px' },
  lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '22px', xl: '24px' },
  mb: { xs: '0px', sm: '0px', md: '4px', lg: '12px', xl: '12px' },
}


export default async function CourseCost() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        maxWidth: '1440px',
        width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 32px)', md: 'calc(100% - 40px)', lg: 'calc(100% - 40px)', xl: 'calc(100% - 40px)' },
        mr: { xs: '16px', sm: '16px', md: '20px', lg: 'auto', xl: 'auto' },
        ml: { xs: '16px', sm: '16px', md: '20px', lg: 'auto', xl: 'auto' },
      }}
    >
      <Box sx={{ display: 'flex', mb: '80px' }}>
        <Typography sx={{ ...titleTypography, color: '#FFA700' }}>
          Стоимость&nbsp;
        </Typography>
        <Typography sx={{ ...titleTypography }}>
          курса
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', bgcolor: '#F2F5F9', borderRadius: '20px', overflow: 'hidden' }}>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            bgcolor: '#1144AA',
            borderRadius: '20px',
            py: { xs: '24px', sm: '24px', md: '58px', lg: '58px', xl: '58px' },
            px: { xs: '20px', sm: '20px', md: '44px', lg: '64px', xl: '64px' },
            width: { xs: '285px', sm: '285px', md: '150px', lg: '285px', xl: '285px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '18px', sm: '18px', md: '22px', lg: '24px', xl: '24px' },
              lineHeight: { xs: '20px', sm: '20px', md: '28px', lg: '32px', xl: '32px' },
              fontWeight: 500,
              color: '#F2F5F9',
              mb: '12px',
              textDecoration: 'line-through',
            }}
          >
            24 000 ₽
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '28px', sm: '28px', md: '32px', lg: '40px', xl: '40px' },
              lineHeight: { xs: '32px', sm: '32px', md: '32px', lg: '48px', xl: '48px' },
              fontWeight: 700,
              color: '#FFF'
            }}
          >
            20 000 ₽
          </Typography>
        </Box>

        <Box sx={{ py: '32px', pr: '40px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', mb: '20px' }}>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '18px' },
                lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
                fontWeight: 400,
                mr: '16px',
              }}
            >
              Скидка действует
            </Typography>
            <Box
              sx={{
                display: 'flex',
                borderRadius: '8px',
                py: '8px',
                px: '20px',
                bgcolor: '#FFA700',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
                  lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
                  fontWeight: 400,
                  color: '#F2F5F9',
                  mr: '12px',
                }}
              >
                4 дня
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
                  lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
                  fontWeight: 600,
                  color: '#F2F5F9',
                }}
              >
                20:09:56
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
                py: '12px',
                px: { xs: '16px', sm: '16px', md: '16px', lg: '32px', xl: '40px' },
                bgcolor: '#FFF',
                mr: '20px',
              }}
            >
              <Typography sx={{ ...boxTypography, fontWeight: 600 }}>
                ДАТА СТАРТА:
              </Typography>
              <Typography
                sx={{ ...boxTypography, fontWeight: 700, color: '#1144AA' }}>
                21 АПРЕЛЯ
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '220px', borderRadius: '8px', py: '12px', px: '40px', bgcolor: '#FFF', mr: '20px'  }}>
              <Typography sx={{ ...boxTypography, fontWeight: 600 }}>
                ДОСТУПНО:
              </Typography>
              <Typography sx={{ ...boxTypography, fontWeight: 700, color: '#1144AA' }}>
                5 МЕСТ
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '305px', borderRadius: '8px', py: '12px', px: '40px', bgcolor: '#FFF'  }}>
              <Typography sx={{ ...boxTypography, fontWeight: 600 }}>
                ДЛИТЕЛЬНОСТЬ:
              </Typography>
              <Typography sx={{ ...boxTypography, fontWeight: 700, color: '#1144AA' }}>
                3 МЕСЯЦА
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
