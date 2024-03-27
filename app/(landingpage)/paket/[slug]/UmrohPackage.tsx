'use client';
import PacketCard from '@/components/packet/PacketCard';
import React from 'react';

export default function UmrohPackage({ data }: { data: any }) {
  const paket_umroh = data;
  return (
    <div className="grid sm:grid-cols-1 gap-3 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {paket_umroh?.map((paket_umroh: any, index: number) => (
        <PacketCard data={paket_umroh} index={index} />
      ))}
    </div>
  );
}
