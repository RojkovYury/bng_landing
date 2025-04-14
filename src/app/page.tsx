'use server'

import { Box } from "@mui/material";
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
import ScreeWidth from "@/components/screen-width";

export default async function Main() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
      <Header />
      <DeveloperSignUp />
      <Box sx={{ height: '40px', bgcolor: "#1144AA", display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} />
      <SignUpMobile />
      <WhereIsItUsed />
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
      <ScreeWidth display="none" /> {/* Для тестов "flex" */}
    </Box>
  )
}
