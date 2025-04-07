'use server';

import { Box, Typography } from "@mui/material";

interface StudentWillMasterTagProps {
  tag: string;
}

export default async function StudentWillMasterTag({ tag }: StudentWillMasterTagProps) {
  return (
    <Box
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
  )
}
