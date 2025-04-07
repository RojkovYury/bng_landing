'use client'

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import outIt from '../../../../../public/images/who-is-it-for-out.png'
import student from '../../../../../public/images/who-is-it-for-stud.png'
import inIt from '../../../../../public/images/who-is-it-for-in.png'
import WhoIsItForMobileCard from "./who-is-it-for-mobile-card";

export default function WhoIsItForMobileCards() {
  /*
  Тут не самые очевидные решения со скроллом, но иначе он работает с артефактами.
  Карточки не должны иметь стандартные отступы: по классике, мы делаем один вправо на Х,
  тут же, между двумя карточками - один влево на х/2 и один вправо на х/2, чтобы лучше центрировалось.
  currentCardSelected - по клику отслеживаем текущую карту. Последняя всегда должна иметь свойство inline: 'end'.
  currentCardScroll - отслеживаем текущую карту по скроллу, threshold: 0.5 - сколько должно войти
  в область видимости для назначения. При изменении currentCardSelected так же принудительно меняем
  */
  const [currentCardSelected, setIsLastOneSelected] = useState(1);
  const [currentCardScroll, setCurrentCardScroll] = useState(1);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

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
      scrollToCard(cardRef1);
      setCurrentCardScroll(1);
    }
    if (currentCardSelected === 2) {
      scrollToCard(cardRef2);
      setCurrentCardScroll(2);
    }
    if (currentCardSelected === 3) {
      scrollToCard(cardRef3);
      setCurrentCardScroll(3);
    }
  }, [currentCardSelected]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === cardRef1.current) {
            setCurrentCardScroll(1);
          } else if (entry.target === cardRef2.current) {
            setCurrentCardScroll(2);
          } else if (entry.target === cardRef3.current) {
            setCurrentCardScroll(3);
          }
        }
      });
    }, { threshold: 0.5 });
    if (cardRef1.current) observer.observe(cardRef1.current);
    if (cardRef2.current) observer.observe(cardRef2.current);
    if (cardRef3.current) observer.observe(cardRef3.current);
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
        <Box ref={cardRef1} sx={{ display: 'flex', }}>
          <WhoIsItForMobileCard
            title='Специалистам вне IT'
            text='Недовольны своим нынешним доходом? Программирование — это удобный путь в прибыльную и быстро развивающуюся IT-индустрию'
            src={outIt}
            ml="20px"
            mr="16px"
          />
        </Box>
        <Box ref={cardRef2} sx={{ display: 'flex', }}>
          <WhoIsItForMobileCard
            title='Студентам'
            text='Освойте престижную профессию еще в процессе обучения. Начните строить карьеру раньше своих сверстников'
            src={student}
            mr="16px"
            ml="16px"
          />
        </Box>
        <Box ref={cardRef3} sx={{ display: 'flex', }}>
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
