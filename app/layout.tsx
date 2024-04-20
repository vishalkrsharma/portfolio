import { ReactNode } from 'react';
import type { Metadata } from 'next';

import '@/app/globals.css';
import { victorMono } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Vishal Kumar Sharma',
  description: "Explore Vishal's portfolio repository, showcasing a collection of projects and achievements.",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={victorMono.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
