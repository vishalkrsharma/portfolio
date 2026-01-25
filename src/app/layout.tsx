import type { Metadata } from 'next';
import './globals.css';
import { doto, firaCode } from '@/lib/fonts';
import { ThemeProvider } from '@/providers/theme-providers';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { FloatingDock } from '@/components/ui/floating-dock';
import { FLOATING_DOCK_DATA } from '@/data/floating-dock-items.data';
import { TooltipProvider } from '@/components/ui/tooltip';
import Devtools from '@/app/(root)/_components/devtools';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vishalkrsharma.com'),
  title: '@vishalkrsharma | Vishal Kumar Sharma - Software Engineer Portfolio',
  description:
    'Explore the professional portfolio of Vishal Kumar Sharma, a Software Engineer specializing in full-stack web development with React, Next.js, TypeScript, and Node.js. Discover projects, skills, achievements, and experience in building scalable and high-performance applications.',
  icons: {
    icon: [
      { url: '/metadata/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/metadata/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/metadata/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/metadata/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={cn('font-fira-code antialiased min-h-screen flex flex-col bg-background relative', firaCode.variable, doto.variable)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className='min-h-screen'>{children}</main>
          </TooltipProvider>
          <ModeToggle className='fixed top-5 right-5 z-50' />
          <FloatingDock items={FLOATING_DOCK_DATA} />
          <Devtools className='fixed bottom-5 left-5 z-50' />
        </ThemeProvider>
      </body>
    </html>
  );
}
