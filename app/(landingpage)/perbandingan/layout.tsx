import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Perbandingan - Umroh.ai',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="container mx-auto">{children}</section>;
}
