import { SAlert } from '@/components/context/ShadAlert';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Paket | Dashboard - Umroh.ai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SAlert>{children}</SAlert>;
}
