import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "FREMN",
  description: "AI receptionist for outpatient clinics. Voice, WhatsApp and Web — 24/7 with zero extra headcount.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="hydrated"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
