import { Button } from '@/components/ui/button';
import React, { Suspense } from 'react';
import PacketAdd from './packetAdd';
import { Separator } from '@/components/ui/separator';
import { CardTitle } from '@/components/ui/card';
import Packets from './Packets';
import LoadingSkeleton from '@/components/Suspense/LoadingSkeleton';
import LoadingUI from '@/components/Suspense/Loading';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <section className="flex items-center justify-between">
        <CardTitle>Paket</CardTitle>
        <PacketAdd />
      </section>
      <Separator />
      <section className="flex flex-col gap-3">
        <CardTitle>Draft</CardTitle>

        <Packets />
      </section>
    </div>
  );
}
