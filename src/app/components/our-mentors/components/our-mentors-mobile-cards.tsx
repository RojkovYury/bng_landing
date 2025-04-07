'use client'

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import mentor1 from '../../../../../public/images/our-mentors-1.png'
import mentor2 from '../../../../../public/images/our-mentors-2.png'
import mentor3 from '../../../../../public/images/our-mentors-3.png'
import OurMentorMobileCard from "./our-mentors-mobile-card";


export default function OurMentorMobileCards() {
  /*
  Тут не самые очевидные решения со скроллом, но иначе он работает с артефактами.
  Карточки не должны иметь стандартные отступы: по классике, мы делаем один вправо на Х,
  тут же, между двумя карточками - один влево на х/2 и один вправо на х/2, чтобы лучше центрировалось.
  currentCardSelected - по клику отслеживаем текущую карту. Последняя всегда должна иметь свойство inline: 'end'.
  currentCardScroll - отслеживаем текущую карту по скроллу, threshold: 0.5 - сколько должно войти
  в область видимости для назначения. При изменении currentCardSelected так же принудительно меняем currentCardScroll.
  */
  const [currentCardSelected, setIsLastOneSelected] = useState(1);
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

      <Box sx={{ display: 'flex', mb: '60px' }}>
        <Box
          onClick={() => setIsLastOneSelected(1)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 1 ? '50%' : '25%',
            ml: '16px',
            mr: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: '#FFA700' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(2)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 2 ? '50%' : '25%',
            mx: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: '#FFA700' }} />
        </Box>

        <Box
          onClick={() => setIsLastOneSelected(3)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCardScroll === 3 ? '50%' : '25%',
            mr: '16px',
            ml: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: '#FFA700' }} />
        </Box>
      </Box>
    </Box>
  )
}
