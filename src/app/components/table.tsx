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
        display: 'flex',
        position: 'relative',
        maxWidth: '1440px',
        mr: { xs: 'auto', sm: 'auto', md: 'auto', lg: '20px', xl: 'auto' },
        ml: { xs: 'auto', sm: 'auto', md: 'auto', lg: '20px', xl: 'auto' },
        mt: { xs: '80px', sm: '80px', md: '180px', lg: '180px', xl: '180px' },
        mb: { xs: '80px', sm: '80px', md: '164px', lg: '164px', xl: '164px' }, // -16px для скролла
        width: { xs: '100%', sm: '100%', md: 'unset', lg: 'unset', xl: 'unset' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'unset', xl: 'unset' },
          width: { xs: '900px', sm: '900px', md: '100%', lg: '100%', xl: '100%' },
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarColor: "#C9D3E8 #FFF",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mb: { xs: '16px', sm: '16px', md: '84px', lg: '84px', xl: '84px' },
            ml: { xs: '16px', sm: '16px', md: '0px', lg: '0px', xl: '0px' },
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
            mb: '16px',
            ml: { xs: '16px', sm: '16px', md: '0px', lg: '0px', xl: '0px' },
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