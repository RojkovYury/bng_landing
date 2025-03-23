'use server'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import table1 from '../../../public/images/table-1.svg'
import table2 from '../../../public/images/table-2.svg'
import table3 from '../../../public/images/table-3.svg'
import table4 from '../../../public/images/table-4.svg'
import table5 from '../../../public/images/table-5.svg'
import table6 from '../../../public/images/table-6.svg'
import table7 from '../../../public/images/table-7.svg'
import table8 from '../../../public/images/table-8.svg'
import table9 from '../../../public/images/table-9.svg'
import table10 from '../../../public/images/table-10.svg'

export default async function Table() {
  return (
    <Box sx={{ height: '784px', display: 'flex', flexDirection: 'column' }}>
      
      <Box sx={{ mt: '180px', mb: '84px', display: 'flex' }}>
        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table1}
              alt="table1"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Настоящее очное обучение с преподавателем
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table2}
              alt="table2"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Работа не на поток, а в малых группах – внимания хватит всем
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table3}
              alt="table3"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Преподаватели – ведущие разработчики в действующей IT-компании
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table4}
              alt="table4"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Сопровождение ментора онлайн между занятиями
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table5}
              alt="table5"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Изучение с нуля до создания проекта веб-приложения/бота
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: '180px', display: 'flex' }}>
        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table6}
              alt="table6"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Выбор темы проекта под индивидуальные пожелания и интересы
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table7}
              alt="table7"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Большое количество практических задач
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table8}
              alt="table8"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Интенсивная программа с большим количеством материала
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table9}
              alt="table9"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Изучение технологий, используемых в сегодняшней разработке
          </Typography>
        </Box>

        <Box sx={{ width: '256px', mr: '40px' }}>
          <Box sx={{ display: 'flex', height: '100px', width: '100px', flexDirection: 'column' }}>
            <Image
              layout="responsive"
              src={table10}
              alt="table10"
              width={100}
              height={100}
            />
          </Box>
          <Typography sx={{ fontSize: '16px', lineHeight: '20px' }}>
            Возможность дальнейшей стажировки и старта карьеры у нас
          </Typography>
        </Box>
      </Box>



    </Box>
  )
}
