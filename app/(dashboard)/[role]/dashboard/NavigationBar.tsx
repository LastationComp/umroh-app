'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavigationBar({ role }: { role: string }) {
  const pathname = usePathname();
  const pathArray = pathname.split('/');

  const generateBar = (url: string, title: string) => {
    const pathArray = pathname.split('/');
    const newUrl = `/${role}/dashboard` + url;
    const className = () => {
      if (pathname === newUrl) return 'underline';
    };

    return (
      <Button variant={'link'} className={className()} asChild>
        <Link href={newUrl}>{title}</Link>
      </Button>
    );
  };
  return (
    <section className="flex items-center">
      {generateBar('', 'Dashboard')}
      {generateBar('kota', 'Kota')}
      <Button variant={'link'} className="transition">
        Dashboard
      </Button>
    </section>
  );
}
