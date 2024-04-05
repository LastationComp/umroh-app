'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function SearchEngine() {
  const router = useRouter();
  return (
    <div className="flex gap-3 w-full">
      <Input className="w-full" placeholder="Masukkan nama paket..." />
      <Button className="flex gap-3 items-center" onClick={() => router.refresh()}>
        <IoIosSearch />
        <span className="max-md:hidden">Cari Paket</span>
      </Button>
    </div>
  );
}
