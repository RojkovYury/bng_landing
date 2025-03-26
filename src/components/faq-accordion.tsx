'use client';

import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

interface FaqAccordionProps {
  title: string;
  text?: string;
  sx?: any;
}

export default function FaqAccordion({ title, text, sx }: FaqAccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => (__event: any, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };
  return (
    <Box sx={{ borderRadius: '20px', overflow: 'hidden', maxWidth: '660px', mb: '40px', ...sx }}>
      <Accordion
        expanded={expanded === true}
        onChange={handleChange()}
        sx={{ width: '100%' }}
      >
        <AccordionSummary
          disableTouchRipple
          expandIcon={
            <Box
              sx={{
                mr: expanded ? '0px' : '16px',
                ml: expanded ? '16px' : '0px',
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                backgroundColor: expanded ? '#F2F5F9' : '#FFA700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: expanded ? '#ECEFF4' : '#FF8C00',
                },
              }}
            >
              {expanded 
                ? (<RemoveOutlinedIcon sx={{ color: '#1144AA', fontSize: '45px' }} />)
                : (<AddOutlinedIcon sx={{ color: '#FFFFFF', fontSize: '45px' }} />)}
            </Box>
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            borderRadius: '20px', 
            '& .MuiAccordionSummary-expandIconWrapper': {
              transition: 'none',
            },
            '& .MuiAccordionSummary-content, Mui-expanded': {
              my: '12px'
            }
          }}
          disableRipple
        >
          <Box
            sx={{
              py: '20px',
              pl: '24px', // 40 - 16 // 16 на AccordionSummary
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '32px', mr: '40px' }}>
              {title}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: '20px', pl: '40px', pr: '100px', mb: '24px' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '24px' }}>
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

            // expandIcon={<ExpandMoreIcon sx={{ mr: '16px' }}/>}


            /*
            
                  <Box sx={{ borderRadius: '20px', overflow: 'hidden', maxWidth: '660px', mb: '40px' }}>
        <Accordion sx={{ width: '100%' }}>
          <AccordionSummary
            expandIcon={
              <Box sx={{ mr: '16px', width: '46px', height: '46px', borderRadius: '8px', bgcolor: '#FFA700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AddOutlinedIcon sx={{ color: '#FFFFFF', fontSize: '45px' }} />
              </Box>
            }
            aria-controls="panel1-content"
            id="panel1-header"
            disableRipple
            sx={{ borderRadius: '20px' }}
          >
            <Box
              sx={{
                py: '20px',
                pl: '24px', // 40 - 16 // 16 на AccordionSummary
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '32px', mr: '40px' }}>
                Что такое C# и почему стоит его изучать?
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ borderRadius: '20px', pl: '40px', pr: '100px', mb: '24px' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '24px' }}>
              Вы научитесь программировать на C#, создавать сайты, мобильные и десктопные приложения. Также освоите основы работы с базами данных SQL, веб-разработку на ASP.NET Core, и получите базовые знания в DevOps.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
            
            */