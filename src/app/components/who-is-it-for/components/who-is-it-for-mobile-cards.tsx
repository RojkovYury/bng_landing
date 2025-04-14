'use client'

import { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import outIt from '../../../../../public/images/who-is-it-for-out.png'
import student from '../../../../../public/images/who-is-it-for-stud.png'
import inIt from '../../../../../public/images/who-is-it-for-in.png'
import WhoIsItForMobileCard from "./who-is-it-for-mobile-card";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function WhoIsItForMobileCards() {
  const [currentCardSelected, setIsLastOneSelected] = useState(0); // 1 не вписывать, иначе на мобиле при открытии useEffect автоматом проскроллит к блоку
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

  const scrollToCard = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        // block: 'center',
        block: 'nearest',
        inline: currentCardSelected === 1
          ? 'start'
          : currentCardSelected === 2
            ? 'center'
            : 'end',
      });
    }
  };

  useEffect(() => {
    if (currentCardSelected === 1) {
      scrollToCard(cardRef1);
    }
    if (currentCardSelected === 2) {
      scrollToCard(cardRef2);
    }
    if (currentCardSelected === 3) {
      scrollToCard(cardRef3);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCardSelected]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 3 }}>
      <Box sx={{ display: 'flex', overflow: 'hidden', zIndex: 2 }}>
        <Box ref={cardRef1} sx={{ display: 'flex' }}>
          <WhoIsItForMobileCard
            title='Специалистам вне IT'
            text='Недовольны своим нынешним доходом? Программирование — это удобный путь в прибыльную и быстро развивающуюся IT-индустрию'
            src={outIt}
            ml="20px"
            mr="16px"
          />
        </Box>
        <Box ref={cardRef2} sx={{ display: 'flex' }}>
          <WhoIsItForMobileCard
            title='Студентам'
            text='Освойте престижную профессию еще в процессе обучения в ВУЗЕ. Начните строить карьеру раньше своих сверстников'
            src={student}
            mr="16px"
            ml="16px"
          />
        </Box>
        <Box ref={cardRef3} sx={{ display: 'flex' }}>
          <WhoIsItForMobileCard
            title='IT специалистам'
            text='Уже работаете программистом? Повысьте свои навыки, изучите востребованный язык С#, чтобы претендовать на более высокую зарплату'
            src={inIt}
            ml="16px"
            mr="20px"
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', mb: '20px' }}>
      <Box
          onClick={() => setIsLastOneSelected(1)}
          sx={{
            width: (currentCardSelected == 1 || !currentCardSelected) ? '75%' : '25%',
            transformOrigin: 'left',
            display: 'flex',
            alignItems: 'center',
            ml: '16px',
            mr: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.4s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: (currentCardSelected == 1 || !currentCardSelected) ? '#FFA700' : '#C9D3E8' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(2)}
          sx={{
            width: currentCardSelected == 2 ? '75%' : '25%',
            display: 'flex',
            alignItems: 'center',
            mx: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.4s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardSelected == 2 ? '#FFA700' : '#C9D3E8' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(3)}
          sx={{
            width: currentCardSelected == 3 ? '75%' : '25%',
            transformOrigin: 'right',
            ml: '8px',
            display: 'flex',
            alignItems: 'center',
            mr: '16px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.4s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardSelected == 3 ? '#FFA700' : '#C9D3E8' }} />
        </Box>
      </Box>

      <IconButton
        onClick={() => {
          if (currentCardSelected == 2) { setIsLastOneSelected(1) }
          if (currentCardSelected == 3) { setIsLastOneSelected(2) }
        }}
        sx={{
          position: 'absolute',
          zIndex: 3,
          width: '46px',
          height: '46px',
          left: '10px',
          top: '230px',
          bgcolor: 'rgba(120, 120, 120, 0.4)',
          opacity: currentCardSelected && currentCardSelected != 1 ? 1 : 0,
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          p: 0,
          '&:hover': {
            bgcolor: 'rgba(120, 120, 120, 0.5)',
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: '#FFF' }}/>
      </IconButton>
      <IconButton
        onClick={() => {
          if (currentCardSelected == 1 || !currentCardSelected) { setIsLastOneSelected(2) }
          if (currentCardSelected == 2) { setIsLastOneSelected(3) }
        }}
        sx={{
          position: 'absolute',
          zIndex: 3,
          width: '46px',
          height: '46px',
          right: '10px',
          top: '230px',
          bgcolor: 'rgba(120, 120, 120, 0.4)',
          opacity: currentCardSelected != 3 ? 1 : 0,
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          p: 0,
          '&:hover': {
            bgcolor: 'rgba(120, 120, 120, 0.5)',
          },
        }}
      >
        <ArrowForwardIosIcon sx={{ color: '#FFF' }}/>
      </IconButton>
    </Box>
  )
}
