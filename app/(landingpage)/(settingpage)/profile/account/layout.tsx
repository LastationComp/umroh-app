import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Akun Saya',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
        {children}
    </section>
  )
}
