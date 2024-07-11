import React from 'react';
import { getPackets, getPaketUmroh } from './action';
import PacketContent from './PacketContent';
import { useSearchPacket } from '@/lib/Zustands/LandingPage/SearchPacket';
import { getUserRole } from '@/app/_actions/Authentication';

export default async function SearchContent(
  { query, category, location, depart, price }: 
  { query: string; category: string; location: string; depart: string, price: string }) {
  const data = await getPackets({
    page: 1,
    q: query,
    category: category,
    location: location,
    depart: depart,
    price: price
  });
  const userRole = await getUserRole();
  return (
    <section>
      <PacketContent data={data} userRole={userRole} q={query} />
    </section>
  );
}
