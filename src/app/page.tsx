'use server'

/*
TODO
WhereIsItUsed - png vs svg ?
WhoIsItFor - bg
Скачать подробный план - кнопка?
Программа нашего учебного центра - что-то открыто по умолчанию?
Положение о персональных данных - link
*/

import { Box, Typography } from "@mui/material";
import Header from "./components/header";
import DeveloperSignUp from "./components/developer-sign-up";
import SignUpMobile from "./components/sign-up-mobile";
import WhereIsItUsed from "./components/where-is-it-used";
import Table from "./components/table";
import AverageSalary from "./components/average-salary";
import WhoIsItFor from "./components/who-is-it-for";
import TrainingCenterProgram from "./components/training-center-program";
import StudentWillMaster from "./components/student-will-master";
import OurMentors from "./components/our-mentors";
import CourseCost from "./components/course-cost";
import Faq from "./components/faq";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

export default async function Main() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <Header />
      {/*
        Что просиходит по клику на сам номер? (Виден только на десктопе)
      */}

      <DeveloperSignUp />
      <Box sx={{ height: '40px', bgcolor: "#1144AA", display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
      <SignUpMobile />
      <WhereIsItUsed />
      {/*
      
      <Table />
      <AverageSalary />
      <WhoIsItFor />
      <TrainingCenterProgram />
      <StudentWillMaster />
      <OurMentors />
      <CourseCost />
      <Faq />
      <Contacts />
      <Footer />
      
      <Box sx={{ position: 'fixed', zIndex: 999, top: '100px', left: '10px', bgcolor: '#fff', borderRadius: '20px', border: '2px solid lightgrey' }}>
        <Typography sx={{ fontSize: '48px', my: '10px', mx: '20px', display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' } }}>
          XS 0px - 599px
        </Typography>
        <Typography sx={{ fontSize: '48px', my: '10px', mx: '20px', display: { xs: 'none', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
          SM 600px - 899px
        </Typography>
        <Typography sx={{ fontSize: '48px', my: '10px', mx: '20px', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none', xl: 'none' } }}>
          MD 900px - 1199px
        </Typography>
        <Typography sx={{ fontSize: '48px', my: '10px', mx: '20px', display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'none' } }}>
          LG 1200px - 1479px
        </Typography>
        <Typography sx={{ fontSize: '48px', my: '10px', mx: '20px', display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex' } }}>
          XL 1480px - inf
        </Typography>
      </Box>
    */}
    </Box>
  )
}
{/*  */}
