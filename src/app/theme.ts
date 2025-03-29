"use client"

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#2F3134",
      fontFamily: "'__Montserrat_47416d', '__Montserrat_Fallback_47416d'"
    },
    fontFamily: '"__Montserrat_47416d", "__Montserrat_Fallback_47416d", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1480,
    },
  },
});

export default theme;
