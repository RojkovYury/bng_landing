'use server'

import { Box } from "@mui/material";
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
import TableCard from "@/components/table-card";

export default async function Table() {
  return (
    <Box
      sx={{
        maxWidth: '1440px',
        minWidth: '900px',
        mr: { xs: '0px', sm: 'auto', md: 'auto', lg: '20px', xl: 'auto' },
        ml: { xs: '0px', sm: 'auto', md: 'auto', lg: '20px', xl: 'auto' },
        // height: '784px',
        // display: 'flex',
        overflowX: { xs: 'auto', md: 'hidden' },
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'unset', xl: 'unset' },
          width: '100%',
          flexWrap: 'nowrap',
          overflow: { xs: 'auto', md: 'hidden' },
        }}
      >



        <Box
          sx={{
            display: 'flex',
            mt: '180px',
            mb: { xs: '16px', sm: '16px', md: '84px', lg: '84px', xl: '84px' },
          }}
        >
          <TableCard src={table1} text="Настоящее очное обучение с преподавателем"/>
          <TableCard src={table2} text="Работа не на поток, а в малых группах – внимания хватит всем"/>
          <TableCard src={table3} text="Преподаватели – ведущие разработчики в действующей IT-компании"/>
          <TableCard src={table4} text="Сопровождение ментора онлайн между занятиями"/>
          <TableCard src={table5} text="Изучение с нуля до создания проекта веб-приложения/бота" sx={{ mr: '0px' }}/>
        </Box>

        <Box
          sx={{
            display: 'flex',
            mb: '180px',
          }}
        >
          <TableCard src={table6} text="Выбор темы проекта под индивидуальные пожелания и интересы"/>
          <TableCard src={table7} text="Большое количество практических задач"/>
          <TableCard src={table8} text="Интенсивная программа с большим количеством материала"/>
          <TableCard src={table9} text="Изучение технологий, используемых в сегодняшней разработке"/>
          <TableCard src={table10} text="Возможность дальнейшей стажировки и старта карьеры у нас" sx={{ mr: '0px' }}/>
        </Box>
      </Box>
    </Box>
  )
}





/*

'use server'

import { Box } from "@mui/material";
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
import TableCard from "@/components/table-card";

export default async function Table() {
  return (
    <Box
      sx={{
        maxWidth: '1440px',
        mr: { xs: '0px', sm: 'auto', md: 'auto', lg: '20px', xl: 'auto' },
        ml: { xs: '0px', sm: 'auto', md: 'auto', lg: '20px', xl: 'auto' },
        // height: '784px',
        display: 'flex',
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'unset', xl: 'unset' },
          // minWidth: '900px',
          flexWrap: 'nowrap',
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mt: '180px',
            mb: '84px',
          }}
        >
          <TableCard src={table1} text="Настоящее очное обучение с преподавателем"/>
          <TableCard src={table2} text="Работа не на поток, а в малых группах – внимания хватит всем"/>
          <TableCard src={table3} text="Преподаватели – ведущие разработчики в действующей IT-компании"/>
          <TableCard src={table4} text="Сопровождение ментора онлайн между занятиями"/>
          <TableCard src={table5} text="Изучение с нуля до создания проекта веб-приложения/бота" sx={{ mr: '0px' }}/>
        </Box>

        <Box
          sx={{
            display: 'flex',
            mb: '180px',
          }}
        >
          <TableCard src={table6} text="Выбор темы проекта под индивидуальные пожелания и интересы"/>
          <TableCard src={table7} text="Большое количество практических задач"/>
          <TableCard src={table8} text="Интенсивная программа с большим количеством материала"/>
          <TableCard src={table9} text="Изучение технологий, используемых в сегодняшней разработке"/>
          <TableCard src={table10} text="Возможность дальнейшей стажировки и старта карьеры у нас" sx={{ mr: '0px' }}/>
        </Box>
      </Box>
    </Box>
  )
}



*/