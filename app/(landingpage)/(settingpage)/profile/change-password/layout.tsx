import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Ubah Password - Umroh.ai',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
