import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FREMN - Future Ready Enterprise Management Network",
  description: "Innovating tomorrow through cutting-edge AI solutions. Future Ready Enterprise Management Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body>
        {children}
      </body>
    </html>
  );
}
