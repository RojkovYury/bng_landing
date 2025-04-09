import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from 'next/image';

interface OurMentorMobileCardProps {
  title?: string;
  subTitle?: string;
  text?: string;
  src: StaticImageData;
  mr?: string;
  ml?: string;
}

export default function OurMentorMobileCard({ title, subTitle, text, src, mr, ml }: OurMentorMobileCardProps) {
  return (   
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        width: '280px',
        ml: ml,
        mr: mr,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          aspectRatio: '16 / 12.5',
        }}
      >
        <Image src={src} alt="" fill />
      </Box>

      <Box
        sx={{
          bgcolor: '#F2F5F9',
          borderBottomLeftRadius: '32px',
          borderBottomRightRadius: '32px',
          height: '100%',
        }}
      >
        <Typography sx={{ fontSize: '16px', lineHeight: '22px', fontWeight: 700, mt: '24px', mb: '12px', px: '16px' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700, mb: '8px', px: '16px' }}>
          {subTitle}
        </Typography>
        <Typography sx={{ fontSize: '14px', lineHeight: '20px', mb: '24px', px: '16px' }}>
         {text}
        </Typography>
      </Box>
    </Box>
  )
}
