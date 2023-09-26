import '@/scss/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vishal Kumar Sharma',
  description: "Explore Vishal Kumar Sharma's portfolio repository, showcasing a collection of projects and achievements.",
  icons: {
    icon: '/assets/favicon.ico',
    apple: '/assets/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
