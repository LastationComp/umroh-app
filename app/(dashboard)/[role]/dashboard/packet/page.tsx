import { Button } from '@/components/ui/button';
import React, { Suspense } from 'react';
import PacketAdd from './packetAdd';
import { Separator } from '@/components/ui/separator';
import { Card, CardTitle } from '@/components/ui/card';
import Packets from './Packets';
import LoadingSkeleton from '@/components/Suspense/LoadingSkeleton';
import LoadingUI from '@/components/Suspense/Loading';

export default function Page() {
  return (
    <Card className="flex flex-col gap-3 p-3">
      <section className="flex items-center justify-between">
        <CardTitle>Paket</CardTitle>
        <PacketAdd />
      </section>
      <Separator />
      <Packets />
    </Card>
  );
}
