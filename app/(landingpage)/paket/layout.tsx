import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cari Paket - Umroh.ai',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="md:container md:mx-auto max-md:mx-3">{children}</section>;
}
