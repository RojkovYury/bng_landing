import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from 'next/image';

interface WhoIsItForMobileCardProps {
  title?: string;
  text?: string;
  src: StaticImageData;
  mr?: string;
  ml?: string;
}

export default function WhoIsItForMobileCard({ title, text, src, mr, ml }: WhoIsItForMobileCardProps) {
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
      <Box sx={{ display: 'flex', position: 'relative', width: '280px', height: '217px', mb: '24px' }}>
        <Image src={src} alt="" layout="fill" objectFit="contain" />
      </Box>
      <Box>
        <Typography sx={{ fontSize: '16px', lineHeight: '22px', fontWeight: 700, mb: '12px', px: '16px' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '14px', lineHeight: '20px', mb: '24px', px: '16px' }}>
         {text}
        </Typography>
      </Box>
    </Box>
  )
}
