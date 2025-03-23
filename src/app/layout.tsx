"use server"

import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
