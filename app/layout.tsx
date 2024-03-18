import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from './Navbar';
import ContactContent from './ContactContent';
import Footer from './Footer';
config.autoAddCss = false;
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
      <body className={inter.className + ' h-screen'}>
        <Navbar />
        {children}
        <ContactContent />
        <Footer />
      </body>
    </html>
  );
}
