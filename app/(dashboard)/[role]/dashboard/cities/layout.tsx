import { ScrollArea } from '@/components/ui/scroll-area';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Kota',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
