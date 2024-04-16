import { ScrollArea } from '@/components/ui/scroll-area';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Provinsi | Dashboard - Umroh.ai',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ScrollArea className="max-h-screen">{children}</ScrollArea>;
}
