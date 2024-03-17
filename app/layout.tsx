import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Umroh.ai',
  description: 'Umroh.ai by PT. UBIG',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
