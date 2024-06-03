'use client';
import { fetcher } from '@/lib/Fetcher';
import React from 'react';
import useSWR from 'swr';
import DraftCard from './DraftCard';
import LoadingUI from '@/components/Suspense/Loading';
import { CardTitle } from '@/components/ui/card';
import PublishPacket from './PublishPacket';

export default function Packets() {
  const { data: drafts } = useSWR('/api/dashboard/travel/packets?is_publish=0', fetcher);
  const { data: publish } = useSWR('/api/dashboard/travel/packets?is_publish=1', fetcher);
  return (
    <section className="flex flex-col gap-3">
      <CardTitle>Draft</CardTitle>

      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-4">{!drafts && <LoadingUI />}</div>
        {drafts &&
          drafts.data.map((packet: any, index: number) => (
            <section key={index}>
              <DraftCard data={packet} index={index + 1} />
            </section>
          ))}
      </div>

      <CardTitle>Publish</CardTitle>
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-4">{!publish && <LoadingUI />}</div>
        {publish?.data?.length === 0 && <span className="col-span-4 text-center">Tidak ada Paket yang di publish.</span>}
        {publish?.data &&
          publish.data.map((packet: any, index: number) => (
            <section key={index}>
              <PublishPacket data={packet} index={index + 1} />
            </section>
          ))}
      </div>
    </section>
  );
}
