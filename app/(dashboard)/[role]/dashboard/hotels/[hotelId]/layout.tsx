import { SWRProvider } from '@/components/provider/swr-component';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Detail Hotel',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <span className="font-bold">Detail Hotel</span>
      {children}
    </section>
  );
}
