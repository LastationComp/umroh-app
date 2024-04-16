import PacketCard from '@/components/packet/PacketCard';
import React from 'react';
import { getPaketUmroh } from './action';
import PacketContent from './PacketContent';
import SearchEngine from './SearchEngine';

export default async function SearchContent() {
  const data = await getPaketUmroh(1);
  return (
    <section>
      <PacketContent data={data} />
    </section>
  );
}
