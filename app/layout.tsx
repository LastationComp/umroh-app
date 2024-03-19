import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from './Navbar';
import ContactContent from './ContactContent';
import Footer from './Footer';
import { faWifi, fas } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
const inter = Poppins({ subsets: ['latin-ext'], weight: '400' });

library.add(faWifi, fas);
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
      <body className={inter.className + ' h-screen transition-all'}>
        <Navbar />
        {children}
        <ContactContent />
        <Footer />
      </body>
    </html>
  );
}
