import React from 'react';
import UmrohPackage from './UmrohPackage';

export default function OtherPacketLists() {
  return (
    <section className="mx-3 my-3 flex flex-col gap-3">
      <div className="text-center">
        <span className="text-xl font-semibold">Paket Umroh Lainnya</span>
      </div>
      <UmrohPackage />
    </section>
  );
}
