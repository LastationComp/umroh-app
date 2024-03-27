import PacketCard from '@/components/packet/PacketCard';
import React from 'react';

async function getPaketUmroh() {
  const res = await fetch('https://umroh-ai-dummy-api-production.up.railway.app/paket_umroh', { cache: 'no-store' });
  return res.json();
}

export default async function SearchContent() {
  const data = await getPaketUmroh();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data.map((paket_umroh: any, index: number) => (
        <PacketCard data={paket_umroh} index={index} />
      ))}
    </div>
  );
}
