import React, { Suspense } from 'react';
import SearchContent from './SearchContent';
import SearchFilter from './SearchFilter';
import LoadingUI from '@/components/Suspense/Loading';

async function getPaketUmroh() {
  const res = await fetch(process.env.URL_API + '/paket_umroh');
  return res.json();
}

export default function Search() {
  return (
    <section className="grid gap-1">
      <SearchFilter />
      {/* <Suspense fallback={<LoadingUI />}> */}
        <SearchContent />
      {/* </Suspense> */}
    </section>
  );
}
