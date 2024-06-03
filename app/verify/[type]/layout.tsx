import { Metadata } from 'next';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Verifikasi - Umroh.ai',
  description: 'Umroh.ai by PT. UBIG',
};

export default function Layout({children}: {children: React.ReactNode}) {
  return(
    <section>
      {children}
    </section>
    
  ) 
}
