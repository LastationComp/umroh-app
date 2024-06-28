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
import { Suspense } from 'react';

config.autoAddCss = false;
const inter = Poppins({ subsets: ['latin-ext'], weight: '400' });

library.add(faWifi, fas);

export const metadata: Metadata = {
  title: {
    template: '%s | ' + process.env.NEXT_PUBLIC_APP_NAME,
    default: process.env.NEXT_PUBLIC_APP_NAME ?? 'App Name',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-tacao m-0 p-0 bg-blend-soft-light bg-kabah bg-center bg-repeat  relative'}>
        <NextTopLoader showSpinner={false} initialPosition={0.3} />
        {children}
        <Suspense fallback>
          <ToastContainer position={'top-center'} theme="colored" />
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
