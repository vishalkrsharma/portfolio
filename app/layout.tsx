import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '@/scss/globals.scss';

export const metadata: Metadata = {
  title: 'Vishal Kumar Sharma',
  description: "Explore Vishal Kumar Sharma's portfolio repository, showcasing a collection of projects and achievements.",
  icons: {
    icon: '/assets/favicon.ico',
    apple: '/assets/favicon.ico',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
