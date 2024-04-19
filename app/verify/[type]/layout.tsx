import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Verifikasi - Umroh.ai',
  description: 'Umroh.ai by PT. UBIG',
};

export default function Layout({children}: {children: React.ReactNode}) {
  return <section>{children}</section>;
}
