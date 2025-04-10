'use client';

import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');

  return (
    <div>
      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px', xl: '18px' },
          lineHeight: { xs: '20px', sm: '20px', md: '20px', lg: '24px', xl: '24px' },
          fontWeight: 600,
          color: '#F2F5F9',
        }}
      >
        {formatTimeUnit(timeLeft.hours)} : {formatTimeUnit(timeLeft.minutes)} : {formatTimeUnit(timeLeft.seconds)}
      </Typography>
    </div>
  );
};

const Timer = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    const storedDate = localStorage.getItem('endTime');
    const currentDate = new Date();

    if (storedDate) {
      setTargetDate(new Date(storedDate));
    } else {
      const newTargetDate = new Date();
      newTargetDate.setHours(currentDate.getHours() + 19);
      newTargetDate.setMinutes(currentDate.getMinutes() + 17);
      newTargetDate.setSeconds(currentDate.getSeconds() + 41);
      localStorage.setItem('endTime', newTargetDate.toISOString());
      setTargetDate(newTargetDate);
    }
  }, []);

  if (!targetDate) {
    return null;
  }
  return <CountdownTimer targetDate={targetDate} />;
};

export default Timer;