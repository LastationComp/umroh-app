import { SWRProvider } from '@/components/provider/swr-component';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Negara',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SWRProvider>{children}</SWRProvider>;
}
