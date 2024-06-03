import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Lengkapi Profile - Umroh.ai',
  description: 'Register to full access umroh.ai',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="bg-white w-screen h-screen ">
    {children}
    </section>;
}
