import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NextTopLoader from 'nextjs-toploader';
import { faWifi, fas } from '@fortawesome/free-solid-svg-icons';
import { Toaster } from '@/components/ui/toaster';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    <html lang="en" className="scroll-p-0 overflow-x-hidden">
      <body className={inter.className + ' bg-tacao'}>
        <NextTopLoader showSpinner={false} initialPosition={0.3} />
        {children}
        <ToastContainer position={'top-center'} theme="colored" />
        <Toaster />
      </body>
    </html>
  );
}
