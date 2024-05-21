'use server';

import React from 'react';
import { getAirlines } from '../../action';
import AirlinesForm from './AirlinesForm';

export default async function Airlines({ packetAirlines }: { packetAirlines: any[] }) {
  const airlines = await getAirlines();
  return (
    <section className="md:w-1/2 flex flex-col gap-3">
      <div className="flex justify-between w-full">
        <span className="w-full">Maskapai Penerbangan</span>
        <span className="w-full">Harga</span>
      </div>
      <AirlinesForm airlines={airlines} data={packetAirlines} />
    </section>
  );
}
