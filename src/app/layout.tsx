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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Программирование в Туле</title>
        <meta name="description" content="description" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="author name" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </head>
      <ThemeProvider theme={theme}>
        <body style={{ margin: 0 }}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
