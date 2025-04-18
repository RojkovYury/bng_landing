'use client';

import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

interface FaqAccordionProps {
  title: string;
  text?: string;
  sx?: any;
  dafaultExpanded?: boolean;
}

export default function FaqAccordion({ title, text, dafaultExpanded, sx }: FaqAccordionProps) {
  const [expanded, setExpanded] = useState(dafaultExpanded);
  const handleChange = () => (__event: any, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };
  return (
    <Box
      sx={{
        borderRadius: { xs: '12px', sm: '12px', md: '20px', lg: '20px', xl: '20px' },
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Accordion
        expanded={expanded === true}
        onChange={handleChange()}
        sx={{ 
          width: '100%',
          '& #panel1-header': {
              pr: { xs: '0px', sm: '0px', md: '4px', lg: '4px', xl: '4px' },
              py: '8px',
            },
        }}
        disableGutters
      >
        <AccordionSummary
          disableTouchRipple
          expandIcon={
            <Box
              sx={{
                mr: expanded ? '0px' : '16px',
                ml: expanded ? '16px' : '0px',
                width: { xs: '34px', sm: '34px', md: '46px', lg: '46px', xl: '46px' },
                height: { xs: '34px', sm: '34px', md: '46px', lg: '46px', xl: '46px' },
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
                ? (<RemoveOutlinedIcon sx={{ color: '#1144AA', fontSize: { xs: '34px', sm: '34px', md: '46px', lg: '46px', xl: '46px' } }} />)
                : (<AddOutlinedIcon sx={{ color: '#FFFFFF', fontSize: { xs: '34px', sm: '34px', md: '46px', lg: '46px', xl: '46px' } }} />)}
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
              my: '12px',
            },
          }}
          disableRipple
        >
          <Box
            sx={{
              py: { xs: '4px', sm: '4px', md: '7px', lg: '7px', xl: '7px' },
              pl: { xs: '0px', sm: '0px', md: '24px', lg: '24px', xl: '24px' }, // 40 - 16 // 16 на AccordionSummary
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '16px', md: '24px', lg: '24px', xl: '24px' },
                lineHeight: { xs: '20px', sm: '20px', md: '32px', lg: '32px', xl: '32px' },
                fontWeight: 500,
                mr: { xs: '16px', sm: '16px', md: '40px', lg: '40px', xl: '40px' },
              }}
            >
              {title}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderRadius: '20px',
            pl: { xs: '16px', sm: '16px', md: '40px', lg: '40px', xl: '40px' },
            pr: { xs: '16px', sm: '100px', md: '100px', lg: '100px', xl: '100px' },
            mb: '24px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '14px', md: '18px', lg: '18px', xl: '18px' },
              lineHeight: { xs: '20px', sm: '20px', md: '24px', lg: '24px', xl: '24px' },
              fontWeight: 400,
            }}
          >
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
