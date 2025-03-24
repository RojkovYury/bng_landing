'use client';

import { Box, Typography } from "@mui/material";

interface AverageSalaryRowProps {
  bgColor: string;
  textPrice: string;
  textCompetence: string;
  textExp: string;
}

export default function AverageSalaryRow({ bgColor, textPrice, textCompetence, textExp }: AverageSalaryRowProps) {
  const jun = (textCompetence == 'JUNIOR');
  const midl = (textCompetence == 'MIDLE');
  return (   
    <Box sx={{ display: 'flex', width: '100%', mb: '20px', borderRadius: '20px', backgroundColor: '#fff' }}>
      
      <Box
        sx={{
          py: '16px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: bgColor,
          borderRadius: '20px',
          width: jun
                  ? '50%'
                  : midl
                    ? '70%'
                    : '95%',
        }}
      >
        <Typography sx={{ ml: '40px', color: '#fff', fontSize: '32px', fontWeight: 600, lineHeight: '40px' }}>
          {textPrice}
        </Typography>
        
        <Box sx={{ display: 'flex', ml: '40px', bgcolor: '#fff', width: '112px', height: '32px', borderRadius: '20px', justifyContent: 'center' }}>
          <Typography sx={{ display: 'flex', color: '#1144AA', fontSize: '18px', fontWeight: 600, lineHeight: '24px', alignItems: 'center' }}>
            {textCompetence}
          </Typography>
        </Box>
        
        <Typography sx={{ ml: '20px', color: '#fff', fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
          {textExp}
        </Typography>
      </Box>
    </Box>
  )
}
