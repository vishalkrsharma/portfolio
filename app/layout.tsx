import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Victor_Mono } from 'next/font/google';

import '@/app/globals.css';

const victorMono = Victor_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'Vishal Kumar Sharma',
  description: "Explore Vishal's portfolio repository, showcasing a collection of projects and achievements.",
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
