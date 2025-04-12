'use client';

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

// Общее время в секундах, начало отсчета с 4 дня 20 : 09 : 56
const TIMER_DURATION = 4 * 24 * 60 * 60 + 20 * 60 + 9 * 60 + 56;

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  
  useEffect(() => {
    // Получаем время начала отсчета из localStorage
    let startTime = JSON.parse(localStorage.getItem("timerStart") || "null");
    
    if (!startTime) {
      // Если нет значения, сохраняем текущее время + нужную длительность
      startTime = Date.now() + TIMER_DURATION * 1000;
      localStorage.setItem("timerStart", JSON.stringify(startTime));
    } else {
      // Если значение есть, вычисляем оставшееся время
      const currentTime = Date.now();
      const remainingTime = Math.max(0, startTime - currentTime);
      
      if (remainingTime < 2 * 24 * 60 * 60 * 1000) {
        // Если оставшееся меньше 2 дней, сбрасываем таймер
        startTime = Date.now() + TIMER_DURATION * 1000;
        localStorage.setItem("timerStart", JSON.stringify(startTime));
      }
    }

    const updateTimeLeft = () => {
      const currentTime = Date.now();
      const newTimeLeft = Math.max(0, Math.floor((startTime - currentTime) / 1000));
      setTimeLeft(newTimeLeft);
    };

    const intervalId = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '8px',
        py: '8px',
        px: '20px',
        bgcolor: '#FFA700',
        width: { xs: '150px', sm: '150px', md: '150px', lg: '165px', xl: '165px' },
        minWidth: { xs: '150px', sm: '150px', md: '150px', lg: '165px', xl: '165px' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
          lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
          fontWeight: 400,
          color: '#F2F5F9',
          mr: '10px',
          textWrap: 'nowrap',
        }}
      >
        {days} дня
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
          lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
          fontWeight: 600,
          color: '#F2F5F9',
        }}
      >
        {`${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`}
      </Typography>
    </Box>
  );
}

/*

'use client';

import { Box, Typography } from "@mui/material";

export default function Timer () {
  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '8px',
        py: '8px',
        px: '20px',
        bgcolor: '#FFA700',
        width: { xs: '146px', sm: '146px', md: '146px', lg: '160px', xl: '160px' },
        minWidth: { xs: '146px', sm: '146px', md: '146px', lg: '160px', xl: '160px' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
          lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
          fontWeight: 400,
          color: '#F2F5F9',
          mr: '10px',
          textWrap: 'nowrap',
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
        20 : 21 : 22
      </Typography>
    </Box>
  )
}

*/