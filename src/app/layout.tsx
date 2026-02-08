import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';



const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FREMN',
  description: 'FREMN builds AI-first software for SMEs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn('dark hydrated', inter.variable, jetbrainsMono.variable)}

      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-[#1E1F22] text-zinc-200">
        <main>{children}</main>
        <Toaster />
        <Script
          src="https://solvia-widget.vercel.app/widget.js"
          strategy="afterInteractive"
          data-organization-id={process.env.ORG_ID}
        />
      </body>
    </html>
  );
}
