import React from 'react';
import UmrohPackage from './UmrohPackage';
import dynamic from 'next/dynamic';

async function getPaketUmroh() {
  const res = await fetch(process.env.URL_API + '/paket_umroh', { cache: 'no-store' });
  return res.json();
}

const UmrohPacket = dynamic(() => import('@/app/(landingpage)/paket/[slug]/UmrohPackage'), { ssr: false });
export default async function OtherPacketLists() {
  const packetData = await getPaketUmroh();
  return (
    <section className=" my-3 mt-[3rem] flex flex-col gap-3">
      <div className="text-center">
        <span className="text-xl font-semibold">Paket Lainnya</span>
      </div>
      <UmrohPacket data={packetData} />
    </section>
  );
}
