'use server'

import { Box } from "@mui/material";
import CourseCostBlueBox from "./components/course-cost-blue-box";
import CourseCostTimer from "./components/course-cost-blue-timer";
import CourseCostWhiteBoxs from "./components/course-cost-white-boxs";
import CourseCostTitle from "./components/course-cost-title";

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
      <CourseCostTitle />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
          justifyContent: 'space-between',
          width: '100%',
          bgcolor: '#F2F5F9',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <CourseCostBlueBox />
        <Box
          sx={{
            py: '32px',
            pr: { xs: '16px', sm: '16px', md: '40px', lg: '40px', xl: '40px' },
            pl: { xs: '16px', sm: '16px', md: '0px', lg: '0px', xl: '0px' },
          }}
        >
          <CourseCostTimer />
          <CourseCostWhiteBoxs />
        </Box>
      </Box>
    </Box>
  )
}
