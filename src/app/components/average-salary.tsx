'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import background from '../../../public/images/average-salary-bg.svg'
import ButtonModalOpen from "@/components/button-modal-open";
import AverageSalaryRow from "@/components/average-salary-row";

export default async function AverageSalary() {
  return (
    <Box sx={{ position: 'relative', zIndex: 3, height: '596px', width: '1440px', mx: 'auto', overflow: 'hidden', borderRadius: '40px' }}>
      
      <Box sx={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%', backgroundColor: '#F2F5F9' }} />
      
      <Box sx={{ position: 'absolute', zIndex: 2, top: '0px', right: '0px', display: 'flex', height: '100%', alignItems: 'start' }}>
        <Image
          layout="responsive"
          src={background}
          alt=""
          width={849}
          height={842}
        />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', mx: '80px' }}>
        
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mt: '64px' }}>
          <Box sx={{ }}>
            <Typography sx={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px', color: '#FFA700' }}>
              220 000 ₽
            </Typography>
            <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}>
              Средняя зарплата специалиста *
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'end' }}>
            <ButtonModalOpen
              text="Начать учиться"
              orange
            />
          </Box>
        </Box>

        <Box sx={{ mt: '64px' }} >
          <AverageSalaryRow
            bgColor='#C9D3E8'
            textPrice='100 000 ₽'
            textCompetence='JUNIOR'
            textExp='После курса'
          />
          <AverageSalaryRow
            bgColor='#798EBC'
            textPrice='220 000 ₽'
            textCompetence='MIDLE'
            textExp='Опыт 1-3 года'
          />
          <AverageSalaryRow
            bgColor='#1144AA'
            textPrice='330 000 ₽'
            textCompetence='SENIOR'
            textExp='С опытом работы от 3 лет'
          />
        </Box>

        <Typography sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', color: '#5C6571' }}>
          *по данным «Хабр Карьеры» в 2024 году
        </Typography>

      </Box>
    </Box>
  )
}
