'use client'

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import mentor1 from '../../../../../public/images/our-mentors-1.png'
import mentor2 from '../../../../../public/images/our-mentors-2.png'
import mentor3 from '../../../../../public/images/our-mentors-3.png'
import OurMentorMobileCard from "./our-mentors-mobile-card";


export default function OurMentorMobileCards() {
  const [currentCardSelected, setIsLastOneSelected] = useState(0);
  const [currentCardScroll, setCurrentCardScroll] = useState(1);
  const cardRefMentor1 = useRef(null);
  const cardRefMentor2 = useRef(null);
  const cardRefMentor3 = useRef(null);

  const scrollToCard = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
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
      scrollToCard(cardRefMentor1);
      setCurrentCardScroll(1);
    }
    if (currentCardSelected === 2) {
      scrollToCard(cardRefMentor2);
      setCurrentCardScroll(2);
    }
    if (currentCardSelected === 3) {
      scrollToCard(cardRefMentor3);
      setCurrentCardScroll(3);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCardSelected]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <Box ref={cardRefMentor1} sx={{ display: 'flex', }}>
          <OurMentorMobileCard
            title='Дмитрий'
            subTitle='FullStack Dev, TeamLead'
            text='Ведущий разработчик, TeamLead. Преподаватель программирования с 8-летним опытом.'
            src={mentor1}
            ml="20px"
            mr="16px"
          />
        </Box>
        <Box ref={cardRefMentor2} sx={{ display: 'flex', }}>
          <OurMentorMobileCard
            title='Сергей'
            subTitle='TeamLead, Architect, FullStack Dev'
            text='Основатель Академии, директор компании по разработке ПО, архитектор программных систем с 16-летним опытом.'
            src={mentor2}
            mr="16px"
            ml="16px"
          />
        </Box>
        <Box ref={cardRefMentor3} sx={{ display: 'flex', }}>
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
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 1 ? '75%' : '25%',
            transformOrigin: 'left',
            ml: '16px',
            mr: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardScroll === 1 ? '#FFA700' : '#C9D3E8' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(2)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 2 ? '75%' : '25%',
            mx: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardScroll === 2 ? '#FFA700' : '#C9D3E8' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(3)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 3 ? '75%' : '25%',
            transformOrigin: 'right',
            mr: '16px',
            ml: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardScroll === 3 ? '#FFA700' : '#C9D3E8' }} />
        </Box>
      </Box>
    </Box>
  )
}

/*
'use client'

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import mentor1 from '../../../../../public/images/our-mentors-1.png'
import mentor2 from '../../../../../public/images/our-mentors-2.png'
import mentor3 from '../../../../../public/images/our-mentors-3.png'
import OurMentorMobileCard from "./our-mentors-mobile-card";


export default function OurMentorMobileCards() {
  const [currentCardSelected, setIsLastOneSelected] = useState(0);
  const [currentCardScroll, setCurrentCardScroll] = useState(1);
  const cardRefMentor1 = useRef(null);
  const cardRefMentor2 = useRef(null);
  const cardRefMentor3 = useRef(null);

  const scrollToCard = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
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
      scrollToCard(cardRefMentor1);
      setCurrentCardScroll(1);
    }
    if (currentCardSelected === 2) {
      scrollToCard(cardRefMentor2);
      setCurrentCardScroll(2);
    }
    if (currentCardSelected === 3) {
      scrollToCard(cardRefMentor3);
      setCurrentCardScroll(3);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCardSelected]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === cardRefMentor1.current) {
            setCurrentCardScroll(1);
          } else if (entry.target === cardRefMentor2.current) {
            setCurrentCardScroll(2);
          } else if (entry.target === cardRefMentor3.current) {
            setCurrentCardScroll(3);
          }
        }
      });
    }, { threshold: 0.5 });
    if (cardRefMentor1.current) observer.observe(cardRefMentor1.current);
    if (cardRefMentor2.current) observer.observe(cardRefMentor2.current);
    if (cardRefMentor3.current) observer.observe(cardRefMentor3.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <Box ref={cardRefMentor1} sx={{ display: 'flex', }}>
          <OurMentorMobileCard
            title='Дмитрий'
            subTitle='FullStack Dev, TeamLead'
            text='Ведущий разработчик, TeamLead. Преподаватель программирования с 8-летним опытом.'
            src={mentor1}
            ml="20px"
            mr="16px"
          />
        </Box>
        <Box ref={cardRefMentor2} sx={{ display: 'flex', }}>
          <OurMentorMobileCard
            title='Сергей'
            subTitle='TeamLead, Architect, FullStack Dev'
            text='Основатель Академии, директор компании по разработке ПО, архитектор программных систем с 16-летним опытом.'
            src={mentor2}
            mr="16px"
            ml="16px"
          />
        </Box>
        <Box ref={cardRefMentor3} sx={{ display: 'flex', }}>
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
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 1 ? '100%' : '25%',
            transformOrigin: 'left',
            ml: '16px',
            mr: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardScroll === 1 ? '#FFA700' : '#C9D3E8' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(2)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 2 ? '100%' : '25%',
            mx: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardScroll === 2 ? '#FFA700' : '#C9D3E8' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(3)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 3 ? '100%' : '25%',
            transformOrigin: 'right',
            mr: '16px',
            ml: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: currentCardScroll === 3 ? '#FFA700' : '#C9D3E8' }} />
        </Box>
      </Box>
    </Box>
  )
}

*/