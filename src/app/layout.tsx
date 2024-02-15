import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucie Homolkova Portfolio',
  description: 'Lucie Homolkova photography portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary text-text-dark`}>
        {children}
      </body>
    </html>
  );
}
