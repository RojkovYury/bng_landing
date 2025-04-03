'use client'

import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import outIt from '../../../../../public/images/who-is-it-for-out.png'
import student from '../../../../../public/images/who-is-it-for-stud.png'
import inIt from '../../../../../public/images/who-is-it-for-in.png'
import WhoIsItForMobileCard from "./who-is-it-for-mobile-card";

export default function WhoIsItForMobileCards() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const [currentCard, setCurrentCard] = useState(1);

  const scrollToCard = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === cardRef1.current) {
            setCurrentCard(1);
          } else if (entry.target === cardRef2.current) {
            setCurrentCard(2);
          } else if (entry.target === cardRef3.current) {
            setCurrentCard(3);
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
          />
        </Box>
        <Box ref={cardRef2} sx={{ display: 'flex', }}>
          <WhoIsItForMobileCard
            title='Студентам'
            text='Освойте престижную профессию еще в процессе обучения. Начните строить карьеру раньше своих сверстников'
            src={student}
          />
        </Box>
        <Box ref={cardRef3} sx={{ display: 'flex', }}>
          <WhoIsItForMobileCard
            title='IT специалистам'
            text='Уже работаете программистом? Повысьте свои навыки, изучите востребованный язык С#, чтобы претендовать на более высокую зарплату'
            src={inIt}
            mr
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', mb: '20px' }}>
        <Box
          onClick={() => scrollToCard(cardRef1)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCard === 1 ? '50%' : '25%',
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
          onClick={() => scrollToCard(cardRef2)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCard === 2 ? '50%' : '25%',
            mx: '8px',
            height: '40px',
            cursor: 'pointer',
            transition: 'width 0.2s ease',
          }}
        >
          <Box sx={{ width: '100%', height: '4px', borderRadius: '2px', bgcolor: '#FFA700' }} />
        </Box>

        <Box
          onClick={() => scrollToCard(cardRef3)} 
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: currentCard === 3 ? '50%' : '25%',
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
