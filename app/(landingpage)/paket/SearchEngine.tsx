import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function SearchContent() {
  return (
    <div className="flex gap-3 w-full">
      <Input className="w-full" placeholder="Masukkan nama paket disini..." />
      <Button className="flex gap-3 items-center">
        <IoIosSearch />
        <span className="max-md:hidden">Cari Paket</span>
      </Button>
    </div>
  );
}
