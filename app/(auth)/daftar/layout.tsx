import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Daftar - Umroh.ai',
  description: 'Login to full access umroh.ai',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="bg-white">{children}</section>;
}
