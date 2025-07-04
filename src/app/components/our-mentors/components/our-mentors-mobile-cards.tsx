'use client'

import { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import mentor1 from '../../../../../public/images/our-mentors-1.png'
import mentor2 from '../../../../../public/images/our-mentors-2.png'
import mentor3 from '../../../../../public/images/our-mentors-3.png'
import OurMentorMobileCard from "./our-mentors-mobile-card";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function OurMentorMobileCards() {
  const [currentCardSelected, setCurrentCardSelected] = useState(0); // 1 не вписывать, иначе на мобиле при открытии useEffect автоматом проскроллит к блоку
  const [isManual, setIsManual] = useState(false);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

  const scrollToCard = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: currentCardSelected == 1
          ? 'start'
          : currentCardSelected == 2
            ? 'center'
            : 'end',
      });
    }
  };

  useEffect(() => {
    if (currentCardSelected === 1 && isManual) {
      scrollToCard(cardRef1);
      setIsManual(false);
    }
    if (currentCardSelected === 2 && isManual) {
      scrollToCard(cardRef2);
      setIsManual(false);
    }
    if (currentCardSelected === 3 && isManual) {
      scrollToCard(cardRef3);
      setIsManual(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCardSelected]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cardsRefs = [cardRef1, cardRef2, cardRef3];
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardsRefs.findIndex((ref) => ref.current === entry.target);
        
        if (index === 0 && (entry.isIntersecting && entry.intersectionRatio === 1.0)) {
          setCurrentCardSelected(index + 1);
        }

        if (index === 1 && (entry.isIntersecting && entry.intersectionRatio >= 0.5)) {
          setCurrentCardSelected(index + 1);
        }

        if (index === 2 && (entry.isIntersecting && entry.intersectionRatio >= 1.0)) {
          setCurrentCardSelected(index + 1);
        }
      });
    }, observerOptions);


    cardsRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => { observer.disconnect(); };
  }, [cardsRefs]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 3 }}>
      <Box
        sx={{
          display: 'flex',
          zIndex: 2,
          overflow: 'auto',
          scrollbarColor: { xs: '#FFF #FFF', sm: '#FFA700 #FFF' },
          pb: { xs: '4px', sm: '26px' },
          mb: { xs: '0px', sm: '28px' },
        }}
      >
        <Box ref={cardRef1} sx={{ display: 'flex' }}>
          <OurMentorMobileCard
            title='Дмитрий'
            subTitle='FullStack Dev, TeamLead'
            text='Ведущий разработчик, TeamLead. Преподаватель программирования с 8-летним опытом.'
            src={mentor1}
            ml="20px"
            mr="16px"
          />
        </Box>
        <Box ref={cardRef2} sx={{ display: 'flex' }}>
          <OurMentorMobileCard
            title='Сергей'
            subTitle='TeamLead, Architect, FullStack Dev'
            text='Основатель Академии, директор компании по разработке ПО, архитектор программных систем с 16-летним опытом.'
            src={mentor2}
            mr="16px"
            ml="16px"
          />
        </Box>
        <Box ref={cardRef3} sx={{ display: 'flex' }}>
          <OurMentorMobileCard
            title='Марина'
            subTitle='C# Senior Dev, TeamLead'
            text='Ведущий российский разработчик и наставник. Ведущий ментор и специалист по обучению новых сотрудников.'
            src={mentor3}
            ml="16px"
            mr="20px"
          />
        </Box>
      </Box>

      {/* Нижние полосочки */}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, mb: '60px', justifyContent: 'center' }}>
        <Box
          onClick={() => { setIsManual(true); setCurrentCardSelected(1); }}
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
          onClick={() => { setIsManual(true); setCurrentCardSelected(2); }}
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
          onClick={() => { setIsManual(true); setCurrentCardSelected(3); }}
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

      {/* Стрелки */}
      <IconButton
        onClick={() => {
          if (currentCardSelected == 2) { setIsManual(true); setCurrentCardSelected(1); }
          if (currentCardSelected == 3) { setIsManual(true); setCurrentCardSelected(2); }
        }}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          position: 'absolute',
          zIndex: 3,
          width: '46px',
          height: '46px',
          left: '10px',
          top: '230px',
          bgcolor: 'rgba(77, 77, 77, 0.4)',
          opacity: currentCardSelected && currentCardSelected != 1 ? 1 : 0,
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          p: 0,
          '&:hover': {
            bgcolor: 'rgba(77, 77, 77, 0.5)',
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: '#FFF' }}/>
      </IconButton>
      <IconButton
        onClick={() => {
          if (currentCardSelected == 1 || !currentCardSelected) { setIsManual(true); setCurrentCardSelected(2); }
          if (currentCardSelected == 2) { setIsManual(true); setCurrentCardSelected(3); }
        }}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          position: 'absolute',
          zIndex: 3,
          width: '46px',
          height: '46px',
          right: '10px',
          top: '230px',
          bgcolor: 'rgba(77, 77, 77, 0.4)',
          opacity: currentCardSelected != 3 ? 1 : 0,
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          p: 0,
          '&:hover': {
            bgcolor: 'rgba(77, 77, 77, 0.5)',
          },
        }}
      >
        <ArrowForwardIosIcon sx={{ color: '#FFF' }}/>
      </IconButton>
    </Box>
  )
}
