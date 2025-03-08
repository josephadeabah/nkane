import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nkane | A Storytelling Village that Bridges Generations and Cultures',
  description:
    'A Digital Storytelling Village that Bridges Generations and Cultures',
  openGraph: {
    title:
      'Nkane | A Storytelling Village that Bridges Generations and Cultures',
    description:
      'A Digital Storytelling Village that Bridges Generations and Cultures',
    images: [
      {
        url: '/og-image.jpg', // Add an OpenGraph image
        width: 1200,
        height: 630,
        alt: 'Nkane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Nkane | A Storytelling Village that Bridges Generations and Cultures',
    description:
      'A Digital Storytelling Village that Bridges Generations and Cultures',
    images: ['/og-image.jpg'], // Add a Twitter image
  },
  icons: {
    icon: '/favicon.ico', // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
