import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Gabung Travel Partner',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white w-screen h-screen">
      <div className="md:container mx-auto px-3">
        <nav className="flex justify-between items-center py-3 gap-3">
          <div className="flex items-center gap-3">
            <Link href={'/'} className="text-lg font-bold">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Link>
            <Separator orientation={'vertical'} className="h-5" />
            <span>Travel Partner</span>
          </div>
        </nav>
        {children}
      </div>
    </section>
  );
}
