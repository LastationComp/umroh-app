import PacketCard from '@/components/packet/PacketCard';
import React from 'react';
import { getPaketUmroh } from './action';
import PacketContent from './PacketContent';

export default async function SearchContent() {
  const data = await getPaketUmroh(1);
  return <PacketContent data={data} />;
}
