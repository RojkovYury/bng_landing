'use client';

import { Box, Typography } from "@mui/material";

interface AverageSalaryRowProps {
  bgColor: string;
  textPrice: string;
  textCompetence: string;
  textExp: string;
  rowWidth: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
}

export default function AverageSalaryRow({ bgColor, textPrice, textCompetence, textExp, rowWidth }: AverageSalaryRowProps) {
  return (   
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        mb: '20px',
        borderRadius: '20px',
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          py: '16px',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
          alignItems: { xs: 'start', sm: 'start', md: 'start', lg: 'center', xl: 'center' },
          backgroundColor: bgColor,
          borderRadius: '20px',
          width: rowWidth,
        }}
      >
        <Typography
          sx={{
            ml: { xs: '16px', sm: '16px', md: '16px', lg: '40px', xl: '40px' },
            color: '#fff',
            fontSize: { xs: '18px', sm: '18px', md: '18px', lg: '32px', xl: '32px' },
            lineHeight: { xs: '22px', sm: '22px', md: '22px', lg: '40px', xl: '40px' },
            fontWeight: 600,
            mb: { xs: '8px', sm: '8px', md: '8px', lg: '0px', xl: '0px' },
          }}
        >
          {textPrice}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box 
            sx={{
              display: 'flex',
              ml: { xs: '16px', sm: '16px', md: '16px', lg: '40px', xl: '40px' },
              bgcolor: '#fff',
              width: { xs: '68px', sm: '68px', md: '68px', lg: '112px', xl: '112px' },
              height: { xs: '20px', sm: '20px', md: '20px', lg: '32px', xl: '32px' },
              borderRadius: '20px',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                color: '#1144AA',
                fontSize: { xs: '12px', sm: '12px', md: '12px', lg: '18px', xl: '18px' },
                lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '24px', xl: '24px' },
                fontWeight: 600,
                alignItems: 'center',
              }}
            >
              {textCompetence}
            </Typography>
          </Box>
          
          <Typography
            sx={{
              ml: { xs: '12px', sm: '12px', md: '12px', lg: '20px', xl: '20px' },
              color: '#fff',
              fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '18px', xl: '18px' },
              lineHeight: { xs: '16px', sm: '16px', md: '16px', lg: '24px', xl: '24px' },
              fontWeight: 500,
            }}
          >
            {textExp}
          </Typography>
        </Box>

      </Box>
    </Box>
  )
}
