'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getMonthString } from '@/lib/String/ParsingDate';
import { useSearchPacket } from '@/lib/Zustands/LandingPage/SearchPacket';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import nProgress from 'nprogress';
import React, { useMemo, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function SearchEngine({ q }: { q: string }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  const createQuery = () => {
    if (!query) return;

    if (searchParams.get('q') === query) return;
    nProgress.start();
    // const params = new URLSearchParams(searchParams);
    // params.set('q', query);

    replace(pathname + '?q=' + query);
  };

  useMemo(() => {
    setQuery(q);
    nProgress.done();
  }, [searchParams]);
  return (
    <form action={createQuery} className="flex gap-3 w-full">
      <Input className="w-full" type="search" placeholder="Masukkan nama paket..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button type="submit" className="flex gap-3 items-center">
        <IoIosSearch />
        <span className="max-md:hidden">Cari Paket</span>
      </Button>
    </form>
  );
}
