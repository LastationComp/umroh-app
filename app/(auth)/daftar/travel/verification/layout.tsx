import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Verifikasi Travel Partner',
  description: 'Register to full access umroh.ai',
};
export default async function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
