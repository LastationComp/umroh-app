import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Validasi Profile',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="bg-white h-svh">{children}</section>;
}
