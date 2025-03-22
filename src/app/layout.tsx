"use client"

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
