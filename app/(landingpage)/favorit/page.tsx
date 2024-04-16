import { Card, CardHeader } from '@/components/ui/card';
import React from 'react';
import FavoritLists from './FavoritLists';

async function getPaketUmroh() {
  const res = await fetch(process.env.URL_API + '/paket_umroh', { cache: 'no-store' });
  return res.json();
}
export default async function Page() {
  const favoritData = await getPaketUmroh();
  const getFavMap = () => {
    return favoritData.map((data: any, index: number) => {
      return {
        ...data,
        qty: 1,
        is_syariah: index % 2 === 0,
      };
    });
  };
  return (
    <section className="flex flex-col gap-3">
      <Card>
        <CardHeader className="font-bold">Favorit Saya</CardHeader>
      </Card>
      <FavoritLists data={getFavMap()} />
    </section>
  );
}
