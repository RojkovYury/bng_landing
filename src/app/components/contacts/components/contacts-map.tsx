'use client';

import SignUpContainer from "@/components/sign-up-container";
import SingUpSuccessSnackbar from "@/components/sign-up-container/components/sign-up-success-snackbar";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ContactsMap() {
  const [loadMap, setLoadMap] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);

  const handleScroll = () => {
    const faqElement = document.getElementById('faq');
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const rect = mapElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setLoadMap(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
    if (faqElement) {
      const rect = faqElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setLoadMap(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        id="map"
        sx={{
          display: 'flex',
          position: 'relative',
          backgroundColor: 'lightgrey',
          height: '518px',
          mb: { xs: '32px', sm: '32px', md: '0px', lg: '0px', xl: '0px' },
          borderRadius: '8px',
          mx: { xs: '16px', sm: '16px', md: '20px', lg: '20px', xl: '0px' },
          '& .popup._type_normal._position_top': {
            bgcolor: 'red',
          },
        }}
      >
        {loadMap && (
          <Box sx={{ width: '100%', height: '100%', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.581067%2C54.192753&mode=search&whatshere%5Bpoint%5D=37.584664%2C54.192188&whatshere%5Bzoom%5D=17&z=16"
              width="100%"
              height="100%"
              allowFullScreen={true}
              title="Yandex map"
              style={{
                position: 'relative',
                border: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            />
          </Box>
        )}

        {loadMap && (
          <Box sx={{ width: '100%', height: '100%', display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.584667%2C54.192753&mode=search&whatshere%5Bpoint%5D=37.584664%2C54.192188&whatshere%5Bzoom%5D=17&z=16"
              width="100%"
              height="100%"
              allowFullScreen={true}
              title="Yandex map"
              style={{
                position: 'relative',
                border: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            />
          </Box>
        )}

        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
            position: 'absolute',
            left: '40px',
            top: '40px',
          }}
        >
          <SignUpContainer
            text="Обратный звонок"
            setOpenSuccessSnackbar={setOpenSuccessSnackbar}
          />
        </Box>
      </Box>

      {/* Mobile */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' },
          mx: 'auto',
          justifyContent: 'center',
        }}
      >
        <SignUpContainer
          text="Обратный звонок"
          setOpenSuccessSnackbar={setOpenSuccessSnackbar}
          sx={{ boxShadow: '0px 12px 20px 0px #13264D1F' }}
        />
      </Box>
      <SingUpSuccessSnackbar open={openSuccessSnackbar} setOpen={setOpenSuccessSnackbar}/>
    </Box>
  )
}
