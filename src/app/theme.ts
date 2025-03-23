"use client"

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#2F3134",
      fontFamily: "'__Montserrat_47416d', '__Montserrat_Fallback_47416d'"
    },
    // fontFamily: "'__Montserrat_63ca74', '__Montserrat_Fallback_63ca74'",
    // fontFamily: '"__Montserrat_fbb60f", "__Montserrat_Fallback_fbb60f", "Roboto", "Helvetica", "Arial", sans-serif',
    fontFamily: '"__Montserrat_47416d", "__Montserrat_Fallback_47416d", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
