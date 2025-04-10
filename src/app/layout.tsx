import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={montserrat.className}>
      <head>
      </head>
      <ThemeProvider theme={theme}>
        <body style={{ margin: 0 }}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
