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
  const [currentCardSelected, setIsLastOneSelected] = useState(1);
  const cardRefMentor1 = useRef(null);
  const cardRefMentor2 = useRef(null);
  const cardRefMentor3 = useRef(null);

  const scrollToCard = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        // block: 'center',
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
    if (currentCardSelected == 1) {
      scrollToCard(cardRefMentor1);
    }
    if (currentCardSelected == 2) {
      scrollToCard(cardRefMentor2);
    }
    if (currentCardSelected == 3) {
      scrollToCard(cardRefMentor3);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCardSelected]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 3 }}>
      <Box sx={{ display: 'flex', overflow: 'hidden', zIndex: 2 }} >
        <Box ref={cardRefMentor1} sx={{ display: 'flex' }}>
          <OurMentorMobileCard
            title='Дмитрий'
            subTitle='FullStack Dev, TeamLead'
            text='Ведущий разработчик, TeamLead. Преподаватель программирования с 8-летним опытом.'
            src={mentor1}
            ml="20px"
            mr="16px"
          />
        </Box>
        <Box ref={cardRefMentor2} sx={{ display: 'flex' }}>
          <OurMentorMobileCard
            title='Сергей'
            subTitle='TeamLead, Architect, FullStack Dev'
            text='Основатель Академии, директор компании по разработке ПО, архитектор программных систем с 16-летним опытом.'
            src={mentor2}
            mr="16px"
            ml="16px"
          />
        </Box>
        <Box ref={cardRefMentor3} sx={{ display: 'flex' }}>
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

      <Box sx={{ display: 'flex', mb: '60px', justifyContent: 'center' }}>
        <Box
          onClick={() => setIsLastOneSelected(1)}
          sx={{
            width: currentCardSelected == 1 ? '75%' : '25%',
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
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardSelected == 1 ? '#FFA700' : '#C9D3E8' }} />
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
          bgcolor: 'rgba(77, 77, 77, 0.4)',
          opacity: currentCardSelected != 1 ? 1 : 0,
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
          if (currentCardSelected == 1) { setIsLastOneSelected(2) }
          if (currentCardSelected == 2) { setIsLastOneSelected(3) }
        }}
        sx={{
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

/*
 <Button
        onClick={() => {
          if (currentCardSelected == 2) { setIsLastOneSelected(1) }
          if (currentCardSelected == 3) { setIsLastOneSelected(2) }
        }}
        sx={{
          position: 'absolute',
          zIndex: 3,
          width: '38px',
          minWidth: '20px',
          height: '404px',
          left: '0px',
          top: '24px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          bgcolor: 'rgba(77, 77, 77, 0.4)',
          borderRadius: '0px',
          opacity: currentCardSelected != 1 ? 1 : 0,
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          p: 0,
          '&:hover': {
            bgcolor: 'rgba(77, 77, 77, 0.5)',
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: '#FFF' }}/>
      </Button>
      <Button
        onClick={() => {
          if (currentCardSelected == 1) { setIsLastOneSelected(2) }
          if (currentCardSelected == 2) { setIsLastOneSelected(3) }
        }}
        sx={{
          position: 'absolute',
          zIndex: 3,
          width: '38px',
          minWidth: '20px',
          height: '404px',
          right: '0px',
          top: '24px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          bgcolor: 'rgba(77, 77, 77, 0.4)',
          borderRadius: '0px',
          opacity: currentCardSelected != 3 ? 1 : 0,
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          p: 0,
          '&:hover': {
            bgcolor: 'rgba(77, 77, 77, 0.5)',
          },
        }}
      >
        <ArrowForwardIosIcon sx={{ color: '#FFF' }}/>
      </Button>
*/