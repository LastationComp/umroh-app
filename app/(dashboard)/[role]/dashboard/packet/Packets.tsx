'use client';
import { fetcher } from '@/lib/Fetcher';
import React from 'react';
import useSWR from 'swr';
import DraftCard from './DraftCard';
import LoadingUI from '@/components/Suspense/Loading';

export default function Packets() {
  const { data: packets } = useSWR('/api/dashboard/travel/packets', fetcher);

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-4">{!packets && <LoadingUI />}</div>
      {packets &&
        packets.data.map((packet: any, index: number) => (
          <section key={index}>
            <DraftCard data={packet} index={index + 1} />
          </section>
        ))}
    </div>
  );
}
